-- Create the temphum_readings table
CREATE TABLE temphum_readings (
    temperature NUMERIC,
    humidity NUMERIC,
    date DATE,
    time TIME
);

-- Set the owner of the table to postgres
ALTER TABLE temphum_readings OWNER TO postgres;
