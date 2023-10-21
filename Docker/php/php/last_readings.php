<?php
// Connect to PostgreSQL server
$conn = pg_connect("host=localhost dbname=arduino user=postgres password=postgres");

// Fetch data from table
$query = "SELECT * FROM roomcondition.temphum_readings
order by date desc,time desc
fetch first rows only";

$result = pg_query($conn, $query);

// Convert result to an associative array
$rows = pg_fetch_all($result);

// Output the result as JSON
header('Content-Type: application/json');
echo json_encode($rows);

// Close the connection
pg_close($conn);
?>
