import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import fs from "fs";
import taskRoutes from './src/routes/taskRoutes.js'; 
import { initPostgres } from './src/config/db.js';
import { initMongo } from './src/config/mongo.js';

dotenv.config();

const app = express();
const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

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
