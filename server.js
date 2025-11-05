import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './src/routes/taskRoutes.js'; 
import { initPostgres } from './src/config/db.js';
import { initMongo } from './src/config/mongo.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Init DB
if (process.env.MONGO === "true") {
  initMongo();
} else {
  initPostgres();
}

// Routes
app.use("/api/todos", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
