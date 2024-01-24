require('dotenv').config();
const express = require('express');
const app = express();
const port = 3200;
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.use(express.json()); // This is a built-in middleware in Express

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
