import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import fs from "fs";
import taskRoutes from './src/routes/taskRoutes.js';
import loginRoutes from './src/routes/loginRoutes.js';
import { initPostgres } from './src/config/db.js';
import { initMongo } from './src/config/mongo.js';
import jwt from 'jsonwebtoken';
import User from './src/models/userModel.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

// Fonction d'initialisation globale
async function startServer() {
  try {
    // --- Connexion aux bases de données ---
    if (process.env.MONGO === "true") {
      // On se connecte à Mongo pour tout (users + todo)
      await initMongo();
      console.log("Connected to MongoDB (todolist + users)");
    } else {
      // On connecte Postgres pour la todolist
      await initPostgres();
      // Et Mongo juste pour les utilisateurs (auth)
      await mongoose.connect("mongodb://localhost:27017/testDB");
      console.log("Connected to PostgreSQL (todo) + MongoDB (users)");
    }

    // --- Routes ---
    app.use("/api/todos", taskRoutes);
    app.use("/", loginRoutes);

    // --- Lancement du serveur ---
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();
