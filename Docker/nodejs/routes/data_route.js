const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/all', async (req, res) => {
    try {
        const queryDate = req.query.date; // Get the value of the 'date' query parameter
        const data = await db.get_all_data(queryDate); // Fetch data for a specific date

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

router.get('/last', async (req, res) => {
    try {
        const data = await db.get_last_data();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

router.get('/average', async (req, res) => {
    try {
        const queryDate = req.query.date;
        const data = await db.get_all_averages(queryDate);

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
