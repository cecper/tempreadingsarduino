const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { json } = require('express');

// Import the data routes
const data_route = require('./routes/data_route');
const average_route = require('./routes/average_route');
const graph_route = require('./routes/graph_route');
const overview_route = require('./routes/overview_route');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the data routes
app.use('/data', data_route);
app.use('/average', average_route);
app.use('/graph', graph_route);
app.use('/overview', overview_route);


app.get('/', async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/data/last'); // Fetch data from the /data/last route
        const data = await response.json();
        const { temperature, humidity, date, time } = data[0];
        res.render('index', { temperature, humidity, date, time });
    } catch (error) {
        console.error(error);
        res.render('index', { temperature: '', humidity: '', date: '', time: '' });
    }
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});