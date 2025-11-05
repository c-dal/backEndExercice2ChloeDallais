import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;
 
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});
 
export const initPostgres = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todolist.tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('PostgreSQL connected and table ready');
  } catch (error) {
    console.error('PostgreSQL error:', error);
  }
};
 
export default pool;