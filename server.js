const express = require('express')
const app = express();
const db = require('./db');

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

app.get('/items', (req, res) =>{
    res.send("Items are Ready");
})

app.get('/', (req, res) =>{
    res.send("Welcome to the Home Page");
});


// insert the person router files
const personRoutes = require('./routes/personRoutes');

// use the router
app.use('/person',personRoutes);

// insert the menu router files
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(3000, () => {
    console.log("Server is Running on Port 3000");
})
