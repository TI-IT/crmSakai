const mongoose = require('mongoose');

async function dbConnect() {
  if (mongoose.connection.readyState == 1) {
    return mongoose.connection.db;
  }

  let url = 'mongodb://127.0.0.1:27017/crm';
  let options = {
    user: 'adminTiit',
    pass:
      process.env.NODE_ENV === 'development '
        ? process.env.MONGO_DEV_PASSWORD
        : process.env.MONGO_PRODUCTION_PASSWORD,
    auth: { authSource: 'crm' },
  };

  return mongoose.connect(url, options, (e) => {
    console.error(e);
  });
}
module.exports = dbConnect;
