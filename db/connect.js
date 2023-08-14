const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.set('strictQuery', false); // Set strictQuery option here
  return mongoose.connect(url);
};

module.exports = connectDB;
