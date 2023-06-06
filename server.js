const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


mongoose.connect('mongodb://localhost/mongooseDB')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

