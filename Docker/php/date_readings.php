<?php
try {
    // Create a new PDO instance for PostgreSQL
    $db = new PDO("pgsql:host=pgsql-service;dbname=arduino;user=postgres;password=postgres");

    // Get the value of the 'date' query parameter
    $date = isset($_GET['date']) ? $_GET['date'] : '';

    // Construct the SQL query based on the 'date' parameter
    $query = "SELECT * FROM roomcondition.temphum_readings";
    if (!empty($date)) {
        // Add a WHERE clause to filter by date if the 'date' parameter is provided
        $query .= " WHERE date = :date";
    }

    $stmt = $db->prepare($query);

    if (!empty($date)) {
        // Bind the date parameter
        $stmt->bindParam(':date', $date, PDO::PARAM_STR);
    }

    $stmt->execute();

    // Fetch the result as an associative array
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Output the result as JSON
    header('Content-Type: application/json');
    echo json_encode($rows);
} catch (PDOException $e) {
    // Handle any database connection errors here
    die("Error: " . $e->getMessage());
}
?>
