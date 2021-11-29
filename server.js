const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Adding my routes
app.use(require('./routes/api'));
app.use(require('./routes/views'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});