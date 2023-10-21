<?php
// Connect to PostgreSQL server
$conn = pg_connect("host=localhost dbname=arduino user=postgres password=postgres");

// Get the value of the 'date' query parameter
$date = isset($_GET['date']) ? $_GET['date'] : '';

// Construct the SQL query based on the 'date' parameter
$query = "SELECT * FROM roomcondition.temphum_readings";
if (!empty($date)) {
    // Add a WHERE clause to filter by date if the 'date' parameter is provided
    $query .= " WHERE date = '$date'";
}

// Fetch data from the table
$result = pg_query($conn, $query);
if (!$result) {
    // Handle query execution error
    echo "An error occurred while executing the query.";
    exit;
}

// Convert result to an associative array
$rows = pg_fetch_all($result);
if (!$rows) {
    // Handle empty result set
    $rows = [];
}

// Output the result as JSON
header('Content-Type: application/json');
echo json_encode($rows);

// Close the connection
pg_close($conn);
?>
