const QRCode = require('qrcode');

const generateQrCode = async (value) => {
  return QRCode.toDataURL(value, {
    margin: 1,
    width: 280,
    color: {
      dark: '#264653',
      light: '#E0E5EC',
    },
  });
};

module.exports = { generateQrCode };
