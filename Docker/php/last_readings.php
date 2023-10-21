<?php
try {
    // Create a new PDO instance for PostgreSQL
    $db = new PDO("pgsql:host=pgsql-service;dbname=arduino;user=postgres;password=postgres");

    // Fetch data from the table
    $query = "SELECT * FROM roomcondition.temphum_readings
              ORDER BY date DESC, time DESC
              FETCH FIRST ROWS ONLY";

    $stmt = $db->query($query);

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
