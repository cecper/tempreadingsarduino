const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
    try {
        const queryDate = req.query.date; // Get the value of the 'date' query parameter
        if(!queryDate) {
            const url = `http://localhost:3000/data/all`; // Append the query parameter to the URL

            const response = await fetch(url);
            const readings = await response.json();
            res.render('overview', { readings, currentDate: queryDate });
        }else{
            const url = `http://localhost:3000/data/all?date=${queryDate}`; // Append the query parameter to the URL

            const response = await fetch(url);
            const readings = await response.json();
            res.render('overview', { readings, currentDate: queryDate });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
