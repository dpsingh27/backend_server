const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu');


//post method to add menu items
router.post('/', async (req, res) => {  // Add a new menu item to the database
    try {
        const data = req.body; // Assuming the request body contains the person data
        const newMenu = new Menu(data); // Create the new person document using the mongoose models
        // Save the new person data in the database
        const response = await newMenu.save(); // Save the new person document to the database
        console.log(response);
        res.status(201).json(response); // Send the response back to the client with a status code
    } catch (err) {
        console.error(err); // Error handling
        res.status(500).json({ error: 'Internal Server Errorrr' }); // Send the error back to the client with appropriate status code
    }

});

//menu 
// Create the new person document using the mongoose models

router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find(); // Fetch all the menu documents from the database
        res.status(200).json(menus); // Send the response back to the client with a status code
    } catch (err) {
        console.error(err); // Error handling
        res.status(500).json({ error: 'Internal Server Error' }); // Send the error back to the client with appropriate status code
    }
});

// export the menu 
module.exports = router;
