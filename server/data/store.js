const fs = require('fs/promises');
const path = require('path');
const mongoose = require('mongoose');
const { createDefaultData } = require('./mockData');

const dbPath = path.join(__dirname, 'db.json');
const stateCollectionName = 'appstates';
const stateId = 'nexhood-state';
let useFileStore = false;

const appStateSchema = new mongoose.Schema(
  {
    _id: { type: String, default: stateId },
    payload: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  {
    collection: stateCollectionName,
    minimize: false,
    versionKey: false,
  }
);

const AppState = mongoose.models.AppState || mongoose.model('AppState', appStateSchema);

const getMongoUri = () => process.env.MONGODB_URI;

const connectDb = async () => {
  if (useFileStore) {
    return null;
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const mongoUri = getMongoUri();
  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing. Add your MongoDB Atlas connection string to server/.env.');
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName: 'nexhood',
      serverSelectionTimeoutMS: 8000,
    });
  } catch (error) {
    useFileStore = true;
    console.warn(`MongoDB unavailable. Falling back to local JSON store at ${dbPath}.`, error.message);
    return null;
  }

  return mongoose.connection;
};

const getSeedData = async () => {
  try {
    const raw = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return createDefaultData();
  }
};

const ensureDb = async () => {
  await connectDb();

  if (useFileStore) {
    try {
      await fs.access(dbPath);
    } catch {
      const payload = await getSeedData();
      await fs.writeFile(dbPath, JSON.stringify(payload, null, 2));
    }
    return getSeedData();
  }

  const existing = await AppState.findById(stateId).lean();
  if (existing) {
    return existing.payload;
  }

  const payload = await getSeedData();
  await AppState.create({
    _id: stateId,
    payload,
  });

  return payload;
};

const readDb = async () => {
  await ensureDb();

  if (useFileStore) {
    const raw = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(raw);
  }

  const state = await AppState.findById(stateId).lean();
  return state.payload;
};

const writeDb = async (data) => {
  await connectDb();

  if (useFileStore) {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    return data;
  }

  await AppState.findByIdAndUpdate(
    stateId,
    { payload: data },
    { upsert: true, setDefaultsOnInsert: true }
  );
  return data;
};

module.exports = {
  connectDb,
  ensureDb,
  readDb,
  writeDb,
};
