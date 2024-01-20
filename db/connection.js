const mongoose = require('mongoose')
const connection_string= process.env.CONNECTION_STRING;


mongoose.connect(connection_string)
  .then(() => {
    console.log('database connection established');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ' + err.message);
  });
