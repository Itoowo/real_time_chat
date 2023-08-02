const express = require('express');
const indexRoute = require('./routes/indexRoute')
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(indexRoute);

app.listen(3000);
console.log('Connected to port 3000');