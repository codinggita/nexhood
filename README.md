<div align="center">

# 🏘️ NexHood

### *Know Your Neighborhood. Own Your Space.*

> **The real estate intelligence platform that turns neighborhood guesswork into data-driven decisions — and transforms apartment parking chaos into a frictionless digital experience.**

[![Figma Design](https://img.shields.io/badge/Figma-Design-blue?logo=figma)](https://www.figma.com/proto/iuxNtjRbFpwefcHVPplrlT/MID_SEM?node-id=84-2&p=f&t=lhKqj6hjNmcBMt8p-0&scaling=min-zoom&content-scaling=fixed&page-id=74%3A1289&starting-point-node-id=84%3A2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-success)](https://www.mongodb.com/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()

</div>

---

## 📖 Table of Contents

- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Folder Structure](#-folder-structure)
- [Installation Guide](#-installation-guide)
- [Usage Guide](#-usage-guide)
- [Screenshots](#-screenshots)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Future Improvements](#-future-improvements)
- [Challenges Faced](#-challenges-faced)
- [Contributing](#-contributing)
- [License](#-license)
- [Authors](#-authors)

---

## 🚨 Problem Statement

Real estate is one of the most significant financial decisions a family will ever make — often involving multi-crore investments, multi-year EMIs, and permanent lifestyle shifts. Yet, the tools available to homebuyers are alarmingly primitive.

### Problem 1: The Neighborhood Data Desert

When Rahul and his family decided to buy a 3BHK in the outskirts of Pune, they visited six properties, liked two, and chose one based on the price and the builder's brochure. Six months after moving in, they discovered:

- The nearest school had a D-rated infrastructure
- A chemical processing unit 2km away consistently pushed the AQI above 180
- The area had 4–6 hour power cuts every summer
- The proposed metro line that the broker promised was still a decade away
- The local water supply was tanker-dependent for 5 months a year

**This is not an edge case. This is the norm.**

Homebuyers today rely on:
- **Broker word-of-mouth** — biased by commission
- **Google Maps reviews** — unstructured, incomplete
- **Social media groups** — anecdotal, often outdated
- **Government PDFs** — buried in bureaucratic portals, unreadable

There is no single, structured, reliable platform that aggregates:

| Data Category | Current Availability | NexHood Approach |
|---|---|---|
| School Quality Index | Scattered across state portals | Aggregated + scored |
| Air Quality Index | CPCB portal, raw numbers | Visualization from static/mock data |
| Water Availability | Utility boards, inconsistent | Crowd-sourced + verified |
| Future Infrastructure | Master plans in 200-page PDFs | Extracted + mapped |

---

### Problem 2: The Apartment Parking Warzone

In any gated society with 200+ apartments, parking is a daily battlefield.

**Scenario:** Mrs. Mehta's daughter is visiting for the weekend. She parks in what seems like a guest slot. Fifteen minutes later, a resident returns and finds their paid spot occupied. The security guard has no record of the visitor. The RWA (Resident Welfare Association) gets a complaint. The visitor is embarrassed. The resident is furious. The guard is helpless.

This happens **every single day** in apartments across India.

The root causes:
- **No digital visitor registration** — paper logbooks are ineffective
- **No parking slot mapping** — residents don't know which slots are available
- **No time-bound permissions** — visitors stay beyond acceptable hours
- **No accountability chain** — when a slot is misused, there's no audit trail
- **Gatekeeping is manual** — security guards work with outdated printouts

The result: conflicts, security risks, and a degraded living experience for everyone.

---

## 💡 Our Solution

**NexHood** is a full-stack real estate intelligence platform built around two core engines:

### Engine 1: Neighborhood Intelligence Platform (NIP)
A data aggregation, scoring, and visualization system that gives homebuyers a **360° profile** of any neighborhood before they commit. The platform uses structured static and mock data to present neighborhood metrics across education, safety, environment, water & utilities, infrastructure, and growth potential.

Every neighborhood receives a **NexScore™** — a composite score out of 100 — broken into six sub-scores that buyers can review to compare localities.

### Engine 2: Smart Visitor Parking System (SVPS)
A QR-code-based, role-aware parking management system that brings digital accountability to apartment visitor access.

The flow is simple:
1. Resident invites a visitor via the app → system generates a time-bound QR pass
2. Visitor shows QR at gate → security guard scans → system validates and logs entry
3. System allocates a guest parking slot → visitor navigates to it
4. On expiry or exit, slot is freed and audit log updated

No paper. No confusion. Full traceability.

---

## ✨ Features

### 🗺️ Neighborhood Analytics Dashboard

- **Interactive map view** with color-coded NexScore overlays
- **Comparison mode**: Compare neighborhoods side-by-side across all metrics
- **Drill-down cards**: Click any metric to see data and last-updated timestamp
- **Neighborhood data** served from static/mock JSON datasets

### 📊 Neighborhood Scoring (NexScore™)

- Composite score (0–100) computed from structured neighborhood data
- Weighted average of 6 sub-scores:
  - 🏫 **Education Index**: School density, board affiliation, infrastructure rating
  - 🔒 **Safety Index**: Crime incident frequency, type distribution
  - 🌬️ **Environment Index**: AQI data, green cover percentage
  - 💧 **Water & Utilities Index**: Water availability, power outage frequency
  - 🏗️ **Infrastructure Index**: Road quality, metro/highway proximity
  - 🔮 **Growth Potential Index**: Upcoming projects, price appreciation history

### 🚗 QR-Based Visitor Parking System

- **Resident Portal**: Generate time-bound visitor passes (2 hours / 4 hours / full day / custom)
- Pass carries: Visitor name, vehicle number, arrival window, host apartment
- **QR code generation**: Server-side QR generated via `qrcode` library
- **Parking slot dashboard**: Visual map of all guest slots and availability
- **Automatic expiry**: System flags overstay
- **Audit logs**: Every scan event stored with timestamp, guard ID, outcome

### 🏠 Admin + Resident Dashboards

**Admin Dashboard:**
- Society overview: Total units, active residents, parking capacity
- Daily visitor traffic analytics
- Incident reports management

**Resident Dashboard:**
- Generate and manage visitor passes
- View parking slot map
- Neighborhood score for their locality

### 📱 Mobile-Friendly UI

- Fully responsive design with **Tailwind CSS breakpoints**
- Touch-optimized map interactions
- QR scanner uses native camera API

### 🔐 Role-Based Access Control (RBAC)

Three distinct roles with granular permissions:

| Role | Capabilities |
|---|---|
| **Society Admin** | Manage residents, configure parking, view all logs |
| **Resident** | Generate passes, view dashboards |
| **Security Guard** | Scan QR codes, log manual entries |

JWT-based authentication with middleware protection on all private routes.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based UI framework |
| **React Router** | Client-side routing |
| **Tailwind CSS 3** | Utility-first responsive styling |
| **Recharts** | Responsive chart components (line, bar, radar) |
| **Axios** | HTTP client with interceptors for auth headers |
| **Context API** | Global auth state management |

### Backend

| Technology | Purpose |
|---|---|
| **Node.js 18** | Runtime environment |
| **Express.js** | REST API framework |
| **JWT** | Stateless authentication |
| **qrcode** | Server-side QR code generation as PNG/SVG |
| **Joi** | Request payload validation |

### Database

| Technology | Purpose |
|---|---|
| **MongoDB 6** | Primary database (neighborhoods, users, visitor passes) |
| **Mongoose** | ODM with schema validation and middleware |

### Tooling

| Technology | Purpose |
|---|---|
| **ESLint + Prettier** | Code style enforcement |
| **dotenv** | Environment variable management |

---

## 🏛️ System Architecture

NexHood follows a clean **MVC architecture** — with a React frontend (View), Express controllers (Controller), and Mongoose models (Model).

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER                               │
│                                                                     │
│   ┌──────────────────────────────────────────────────────────┐     │
│   │              React Web App (Vite + React Router)          │     │
│   │         Home · Login · Dashboard · Neighborhood · Parking │     │
│   └──────────────────────────┬───────────────────────────────┘     │
└──────────────────────────────┼──────────────────────────────────────┘
                               │  HTTPS (REST API calls via Axios)
                               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                      Express.js API Server                           │
│               Auth Middleware · CORS · Request Logging               │
└───────┬────────────────────────┬────────────────────────────────────┘
        │                        │                        
        ▼                        ▼                        
┌───────────────┐   ┌────────────────────┐   ┌───────────────────────┐
│  Neighborhood │   │  Parking & Visitor │   │   User & Auth         │
│  Controller   │   │  Controller        │   │   Controller          │
│               │   │                   │   │                       │
│  - Fetch data │   │  - Generate QR    │   │  - Register / Login   │
│  - Score calc │   │  - Verify QR      │   │  - Role assignment    │
│  - Reports    │   │  - Slot tracking  │   │  - Profile mgmt       │
└───────┬───────┘   └────────┬───────────┘   └──────────┬────────────┘
        │                    │                           │
        └────────────────────┴───────────────────────────┘
                                      │
                                      ▼
                          ┌──────────────────────┐
                          │       MongoDB         │
                          │                      │
                          │  - Users             │
                          │  - Neighborhoods     │
                          │  - Visitor Passes    │
                          └──────────────────────┘
                                      │
                                      ▼
                          ┌──────────────────────┐
                          │    Static Mock Data   │
                          │  (neighborhoods.json  │
                          │   neighborhoods.js)   │
                          └──────────────────────┘
```

### API Request Flow — Neighborhood Report

```
User clicks "View Neighborhood"
        │
        ▼
React frontend calls GET /api/neighborhood-data/:locality_id
        │
        ▼
Express API validates JWT via authMiddleware, routes to neighborhoodController
        │
        ├──► MongoDB: fetch neighborhood document
        │
        └──► Static mock data: fill missing fields from neighborhoods.js
        │
        ▼
Controller composes full neighborhood object
        │
        ▼
Response returned to frontend as JSON
        │
        ▼
React renders dashboard with Recharts + map visualization
```

---

## 📁 Folder Structure

```
nexhood/
├── client/                     # React frontend (View)
│   ├── public/
│   ├── src/
│   │   ├── assets/             # images, icons
│   │   ├── components/         # reusable UI
│   │   │   ├── ui/
│   │   │   ├── layout/
│   │   │   ├── charts/
│   │   │   └── map/
│   │   │
│   │   ├── pages/              # main pages (View layer)
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Neighborhood.jsx
│   │   │   └── Parking.jsx
│   │   │
│   │   ├── hooks/              # Controller logic (React hooks)
│   │   │   ├── useAuth.js
│   │   │   ├── useNeighborhood.js
│   │   │   └── useParking.js
│   │   │
│   │   ├── services/           # API calls (Controller)
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── neighborhoodService.js
│   │   │   └── parkingService.js
│   │   │
│   │   ├── context/            # global state (optional)
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── utils/              # helpers
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── data/               # static/mock data (IMPORTANT)
│   │   │   └── neighborhoods.json
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                     # Backend (Model + Controller)
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/                 # Model layer
│   │   ├── User.js
│   │   ├── Neighborhood.js
│   │   └── Visitor.js
│   │
│   ├── controllers/            # Controller logic
│   │   ├── authController.js
│   │   ├── neighborhoodController.js
│   │   └── parkingController.js
│   │
│   ├── routes/                 # Routes
│   │   ├── authRoutes.js
│   │   ├── neighborhoodRoutes.js
│   │   └── parkingRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── utils/
│   │   └── generateQR.js
│   │
│   ├── data/                   # mock data (VERY USEFUL)
│   │   └── neighborhoods.js
│   │
│   ├── app.js
│   └── package.json
│
├── README.md
└── package.json
```

---

## ⚙️ Installation Guide

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0
- **MongoDB** 6.x (local or Atlas)
- **Git**

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/nexhood.git
cd nexhood
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 3. Set Up Environment Variables

#### Backend (`server/.env`)

```env
# App
NODE_ENV=development
PORT=4000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/nexhood

# JWT
JWT_SECRET=your-very-long-random-secret-key-here
JWT_EXPIRES_IN=7d

# QR Code
QR_BASE_URL=http://localhost:3000/verify
```

#### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:4000/api
```

---

### 4. Database Setup

#### Start MongoDB

```bash
# If running locally
mongod
```

#### Seed Initial Data

```bash
cd server
npm run seed
# Populates: sample neighborhoods, demo society, admin user
```

---

### 5. Start the Development Servers

```bash
# Terminal 1 — Backend API
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

---

### 6. Verify Setup

Visit the following URLs to confirm everything is running:

- Frontend: `http://localhost:5173`
- API Health: `http://localhost:4000/api/health`

Default credentials after seeding:
- **Admin**: `admin@nexhood.in` / `Admin@123`
- **Resident**: `demo.resident@nexhood.in` / `Resident@123`

---

## 📘 Usage Guide

### Workflow 1: First-Time Homebuyer — Evaluating a Neighborhood

1. **Register** as a new user at `/register`
2. Navigate to **Neighborhood Explorer** from the sidebar
3. **Search** for a locality by name or pin code (e.g., "Baner, Pune")
4. View the **NexScore™ overview card** — overall score + 6 sub-scores
5. Click **"View Full Analysis"** to expand the dashboard:
   - Explore the AQI trend chart
   - View the infrastructure timeline (upcoming projects)
6. Click **"Compare"** to add a second neighborhood side-by-side

---

### Workflow 2: Visitor Parking QR Flow

**Step 1 — Resident generates a pass:**
1. Resident logs in → goes to **Parking** section
2. Clicks **"Invite Visitor"**
3. Fills form: Visitor Name, Vehicle Number, Expected Arrival, Duration
4. Clicks **"Generate Pass"**
5. System creates a time-bound QR code

**Step 2 — Visitor arrives:**
1. Visitor shows QR code on phone to security guard
2. Guard opens the **Guard App** (`/guard`) and taps **"Scan QR"**
3. Camera opens → scans QR
4. System validates: checks token signature and expiry
5. If valid: ✅ Green screen with slot assignment (e.g., "G-07")
6. If expired/invalid: ❌ Red screen with reason

**Step 3 — Slot update:**
1. Resident's dashboard shows parking slot as "Occupied"
2. On visitor exit, guard marks exit → slot freed → dashboard updates


## 🎨 Design & Prototypes

The UI/UX of NexHood is designed with a focus on clarity, data-driven insights, and seamless user experience for both homebuyers and residential societies.

The design system emphasizes:
- Clean and intuitive dashboards for complex data visualization
- Map-first interface for neighborhood exploration
- Mobile-friendly flows for visitor parking and QR scanning
- Role-based UI tailored for Admins, Residents, and Security Guards

**Figma Project:**  
https://www.figma.com/proto/iuxNtjRbFpwefcHVPplrlT/MID_SEM?page-id=74%3A1289&node-id=84-2&p=f&viewport=80%2C-61%2C0.15&t=ee6ZGvsyigkQYL9u-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=84%3A2

**Key Screens Designed:**
- Neighborhood Explorer
- NexScore Dashboard
- Infrastructure Timeline
- Visitor Pass Generation
- QR Scanner (Guard App)

> Note: The screenshots below are exported directly from the Figma designs.

---

## 📸 Screenshots

> 📌 Screenshots are from the live staging environment at `staging.nexhood.in`

| Screen | Preview |
|---|---|
| Neighborhood Explorer | ![](https://res.cloudinary.com/dsvggz83x/image/upload/v1776880132/landing_pzyto4.png) |
| NexScore™ Dashboard | ![](https://res.cloudinary.com/dsvggz83x/image/upload/v1776880132/dashboard_covjyn.png) |
| Infrastructure Timeline | ![](https://res.cloudinary.com/dsvggz83x/image/upload/v1776880132/infra_zwjzcc.png) |
| Neighborhood Comparison | ![](https://res.cloudinary.com/dsvggz83x/image/upload/v1776880132/compare_wj07zk.png) |

---

## 📡 API Documentation

Base URL: `http://localhost:4000/api`

All authenticated endpoints require:
```
Authorization: Bearer <access_token>
Content-Type: application/json
```

---

### 🔐 Auth Endpoints

#### `POST /auth/register`
Register a new user.

**Request:**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "password": "SecurePass@123",
  "role": "resident",
  "society_id": "soc_abc123"
}
```

**Response `201`:**
```json
{
  "success": true,
  "user": { "id": "usr_xyz", "name": "Rahul Sharma", "role": "resident" },
  "accessToken": "eyJhbGci..."
}
```

---

#### `POST /auth/login`
Authenticate and receive token.

---

### 🏘️ Neighborhood Endpoints

#### `GET /neighborhood-data/:locality_id`
Fetch full neighborhood data object.

**Response `200`:**
```json
{
  "locality": {
    "id": "loc_pune_baner",
    "name": "Baner",
    "city": "Pune",
    "coordinates": { "lat": 18.5590, "lng": 73.7868 },
    "nexscore": 71,
    "sub_scores": {
      "education": 78,
      "safety": 65,
      "environment": 58,
      "water_utilities": 72,
      "infrastructure": 80,
      "growth_potential": 74
    },
    "data_confidence": "high"
  }
}
```

---

#### `POST /neighborhood-data/compare`
Compare multiple localities.

**Request:**
```json
{
  "locality_ids": ["loc_pune_baner", "loc_pune_wakad", "loc_pune_kothrud"]
}
```

**Response `200`:** Array of scored locality objects.

---

### 🚗 Visitor Parking Endpoints

#### `POST /visitor-pass`
Generate a new time-bound QR visitor pass. Requires `resident` role.

**Request:**
```json
{
  "visitor_name": "Priya Kapoor",
  "vehicle_number": "MH12AB1234",
  "arrival_window_start": "2025-04-15T14:00:00Z",
  "duration_hours": 4,
  "host_apartment": "B-402"
}
```

**Response `201`:**
```json
{
  "pass_id": "vp_7f9c2a",
  "qr_code_url": "http://localhost:4000/qr/vp_7f9c2a.png",
  "valid_until": "2025-04-15T18:00:00Z",
  "slot_pre_assigned": "G-07",
  "status": "active"
}
```

---

#### `POST /verify-qr`
Validate a scanned QR pass. Requires `guard` or `admin` role.

**Request:**
```json
{
  "token": "vp_7f9c2a_signed_payload_here",
  "guard_id": "grd_001",
  "scan_type": "entry"
}
```

**Response `200` (valid):**
```json
{
  "valid": true,
  "visitor_name": "Priya Kapoor",
  "vehicle_number": "MH12AB1234",
  "host_apartment": "B-402",
  "slot_assigned": "G-07",
  "valid_until": "2025-04-15T18:00:00Z",
  "message": "Access granted. Direct visitor to slot G-07."
}
```

**Response `403` (expired):**
```json
{
  "valid": false,
  "reason": "pass_expired",
  "expired_at": "2025-04-15T18:00:00Z",
  "message": "This pass has expired. Please ask the resident to generate a new pass."
}
```

---

#### `PATCH /visitor-pass/:pass_id/exit`
Mark a visitor as exited and free the parking slot.

**Response `200`:**
```json
{
  "success": true,
  "slot_freed": "G-07",
  "duration_parked": "3h 22m",
  "exit_time": "2025-04-15T17:22:00Z"
}
```

---

#### `GET /parking/slots/:society_id`
Get parking slot map for a society.

**Response `200`:**
```json
{
  "total_guest_slots": 20,
  "available": 13,
  "occupied": 7,
  "slots": [
    { "slot_id": "G-01", "status": "available" },
    { "slot_id": "G-07", "status": "occupied", "pass_id": "vp_7f9c2a", "visitor": "Priya Kapoor" }
  ]
}
```

---

## 🗄️ Database Schema

### MongoDB Collections

#### `neighborhoods`
```js
{
  _id: ObjectId,
  locality_id: String,        // Unique slug: "pune_baner"
  name: String,
  city: String,
  state: String,
  coordinates: { lat: Number, lng: Number },
  nexscore: Number,           // Composite score
  sub_scores: {
    education: Number,
    safety: Number,
    environment: Number,
    water_utilities: Number,
    infrastructure: Number,
    growth_potential: Number
  },
  raw_data: {
    aqi: { current: Number, trend: Array },
    schools: Array,
    upcoming_projects: Array
  },
  last_synced: Date,
  created_at: Date
}
```

#### `visitor_passes`
```js
{
  _id: ObjectId,
  pass_id: String,            // "vp_7f9c2a"
  resident_id: ObjectId,
  society_id: ObjectId,
  visitor_name: String,
  vehicle_number: String,
  host_apartment: String,
  slot_assigned: String,
  qr_token: String,           // Signed token embedded in QR
  valid_from: Date,
  valid_until: Date,
  status: Enum['active', 'used', 'expired', 'revoked'],
  scan_logs: [{
    guard_id: ObjectId,
    scan_type: Enum['entry', 'exit'],
    timestamp: Date,
    result: Enum['success', 'failed']
  }],
  created_at: Date
}
```

#### `users`
```js
{
  _id: ObjectId,
  name: String,
  email: String,              // Unique
  password_hash: String,      // bcrypt
  role: Enum['admin', 'resident', 'guard'],
  society_id: ObjectId,
  apartment: String,          // e.g., "B-402"
  is_active: Boolean,
  created_at: Date
}
```

---

## 🔮 Future Improvements

### 🤖 Advanced AI Predictions
- **Price appreciation forecast**: ML model trained on historical price data + infrastructure developments to predict 2–5 year property value growth
- **Personalized matching**: Input your lifestyle profile and get ranked neighborhood recommendations

### 📱 Native Mobile App
- iOS + Android apps built with **React Native**
- Offline-first architecture with local caching for low-connectivity areas
- Biometric authentication for guard app
- Push notifications for QR expiry, slot availability

### 🔌 IoT Parking Sensors
- Ultrasonic sensors in parking slots transmit live occupancy via MQTT
- Automatic slot status updates without manual guard intervention
- Dashboard shows sensor battery levels and health

### 🏛️ Government Data Integration
- Direct API integrations with:
  - NCRB (National Crime Records Bureau)
  - UDISE+ (Unified District Information System for Education)
  - Smart Cities Mission portal
  - MoHUA (Ministry of Housing and Urban Affairs)
- Auto-sync scheduled tasks replace manual data upload

### 🏗️ Developer API (B2B)
- Public API for PropTech companies to embed NexScore widgets
- White-label neighborhood intelligence for real estate portals
- Tiered pricing with rate limiting via API keys

### 🗣️ Multilingual Support
- UI localization: Hindi, Marathi, Tamil, Telugu, Kannada
- Voice-based neighborhood search for low-literacy users
- Regional government portal scraping for state-specific data

---

## 🧗 Challenges Faced

### 1. Data Aggregation
**Challenge:** Government data exists in 50+ formats — some as PDFs, some as Excel sheets, some as poorly structured HTML tables.

**Approach:** Used structured static JSON datasets (`neighborhoods.json` / `neighborhoods.js`) as a reliable fallback, with mock data representing verified neighborhood metrics. Coverage can be extended as real data sources become available.

---

### 2. QR Token Security
**Challenge:** A malicious user could screenshot a valid QR and share it, or attempt to reuse expired tokens.

**Approach:**
- QR tokens are signed with HMAC using a server-side secret
- Token validity is checked against expiry on every scan
- Guard app displays registered vehicle number for manual cross-check
- 5-minute post-expiry grace window to handle clock drift

---

### 3. Privacy & Misuse Concerns
**Challenge:** Visitor pass data contains PII. QR token security must be airtight.

**Approach:**
- Visitor PII encrypted at rest
- QR tokens are time-bound with expiry validation
- Role-based access ensures only authorized guards can verify passes

---

## 🤝 Contributing

We welcome contributions from developers, designers, data engineers, and domain experts in real estate and urban planning.

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Follow the coding standards: `npm run lint && npm run format`
4. Write tests for new features: `npm run test`
5. Submit a pull request with a clear description

### Contribution Areas

- 🗄️ **Data**: Help source and clean neighborhood datasets for new cities
- 🎨 **Design**: UI/UX improvements, accessibility
- 🔧 **Backend**: New API endpoints, performance optimization
- 📖 **Docs**: Improve documentation and add usage examples

### Code Standards

- All code must pass ESLint + Prettier checks
- New API endpoints must include Joi validation
- React components must follow hook-based patterns
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) format

### Reporting Issues

Use the GitHub Issues tab. Please include:
- Environment (OS, Node version, browser)
- Steps to reproduce
- Expected vs actual behaviour
- Relevant logs (redact sensitive data)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 NexHood Technologies Pvt. Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

See [LICENSE](LICENSE) for full text.

---

## 👤 Authors

<table>
  <tr>
    <td align="center">
      <strong>Hanuman Singh</strong><br/>
      <sub>Full-Stack Engineer & Product Lead</sub><br/>
      <a href="https://github.com/hanumanraj07">@Github</a> ·
      <a href="https://linkedin.com/in/hanumanraj07">LinkedIn</a>
    </td>
  </tr>
</table>

> 💌 For business inquiries, partnerships, or pilot programs: **hanumanrajpurohit.vercel.app**

---

<div align="center">

**Built with ❤️ for homebuyers who deserve better data.**

*NexHood — Know Your Neighborhood. Own Your Space.*

⭐ If this project helped you, consider giving it a star!

</div>