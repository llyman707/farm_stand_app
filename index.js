const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open!!')
    })
    .catch(err => {
        console.log('oh no mongo error!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof!')
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})