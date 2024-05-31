const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data
        const newPerson = new Person(data); // Create the new person document using the mongoose models
        // Save the new person data in the database
        const response = await newPerson.save(); // Save the new person document to the database
        console.log(response);
        res.status(201).json(response); // Send the response back to the client with a status code
    } catch (err) {
        console.error(err); // Error handling
        res.status(500).json({ error: 'Internal Server Error' }); // Send the error back to the client with appropriate status code
    }
});

//get method to get the person 
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find(); // Fetch all the person documents from the database
        res.status(200).json(persons); // Send the response back to the client with a status code
    } catch (err) {
        console.error(err); // Error handling
        res.status(500).json({ error: 'Internal Server Error' }); // Send the error back to the client with appropriate status code
    }
});

// work type call  parametarised api call
// : it use as variable 
router.get('/:workType', async (req, res) => {
    const workType = req.params.workType;

    // validation
   try {
    if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
        const response = await Person.find({ work: workType });
        console.log('response fetched')
        res.status(200).json(response);

    } else {
        res.status(400).json({ error: 'Invalid work type' });
        return;
    }
   } catch (err) {
   console.log(err); // Error handling
    res.status(500).json({ error: 'Internal Server Error' }); // Send the error back to the client with appropriate status code
   }

});

module.exports = router;
