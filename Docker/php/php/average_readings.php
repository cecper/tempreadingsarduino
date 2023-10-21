<?php
// Connect to PostgreSQL server
$conn = pg_connect("host=localhost dbname=arduino user=postgres password=postgres");

$date = isset($_GET['date']) ? $_GET['date'] : '';

// Fetch data from table
$query = "SELECT avg(temperature) as average_temperature, max(temperature) as max_temperature, min(temperature) as min_temperature,
                 avg(humidity) as average_humidity, max(humidity) as max_humidity, min(humidity) as min_humidity,
                 date, count(*) as amount_of_readings
          FROM roomcondition.temphum_readings";

if (!empty($date)) {
  // Add a WHERE clause to filter by date if the 'date' parameter is provided
  $query .= " WHERE date = '$date'";
}

$query .= " GROUP BY date";

$result = pg_query($conn, $query);

// Convert result to an associative array
$rows = pg_fetch_all($result);

// Output the result as JSON
header('Content-Type: application/json');
echo json_encode($rows);

// Close the connection
pg_close($conn);
?>
