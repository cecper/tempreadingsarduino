const axios = require("axios");
const php_port = 8000;

function get_all_data(date) {
    let url = `http://localhost:${php_port}/date_readings.php?date=${date}`;
    if(date ==undefined){
        url=`http://localhost:${php_port}/all_readings.php`;
    }

    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw new Error('An error occurred');
        });
}

function get_last_data() {
    return axios.get(`http://localhost:${php_port}/last_readings.php`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw new Error('An error occurred');
        });
};

function get_all_averages(date) {
    let url = `http://localhost:${php_port}/average_readings.php?date=${date}`;
    if(date ==undefined){
        url=`http://localhost:${php_port}/average_readings.php`;
    }
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw new Error('An error occurred');
        });
}

module.exports = {  get_last_data,get_all_data,get_all_averages };