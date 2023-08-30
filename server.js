const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://nik-k:dpmE72E5aQexZx28@cluster0.iwflmpj.mongodb.net/';

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log('server run !!!!');
  })
  .catch(error => {
    console.log('error message!!!!', error.message);
    process.exit(1);
  });
