const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const queryDate = req.query.date; // Get the value of the 'date' query parameter
        if(!queryDate) {
            const url = `http://localhost:3000/data/average`; // Append the query parameter to the URL

            const response = await fetch(url);
            const averages = await response.json();
            res.render('averages', { averages, currentDate: queryDate });
        }else{
            const url = `http://localhost:3000/data/average?date=${queryDate}`; // Append the query parameter to the URL

            const response = await fetch(url);
            const averages = await response.json();
            res.render('averages', { averages, currentDate: queryDate });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
