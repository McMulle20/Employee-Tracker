import dotenv from 'dotenv';
dotenv.config();

// Log environment variables
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Import and require Pool (node-postgres)
import pg from 'pg';
const { Pool } = pg;

// Create a connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost', // You can make this dynamic by using an environment variable
  database: process.env.DB_NAME,
  port: 5432, // Default PostgreSQL port
});

// Function to connect to the database
const connectToDb = async () => {
  try {
    await pool.connect(); // Establish a connection from the pool
    console.log('Connected to the database.');
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit the application if connection fails
  }
};

// Export the pool and connectToDb function for use in other parts of the application
export { pool, connectToDb };
