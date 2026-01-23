import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRoutes from './routes/usersRoutes.js';
import recipesRoutes from './routes/recipesRoutes.js';


dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/recipes', recipesRoutes);

export default app;
