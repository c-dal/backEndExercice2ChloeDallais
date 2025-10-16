import express from 'express';
import cors from 'cors';
import dotevn from 'dotenv';
import taskRoutes from './src/routes/taskRoutes.js'; 

dotevn.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
