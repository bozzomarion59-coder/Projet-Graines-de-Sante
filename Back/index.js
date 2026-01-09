import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './routes/usersRoutes.js';
import recipesRoutes from './routes/recipesRoutes.js';  
import categorieRoutes from './routes/categorieRoutes.js';
import ingredientsRoutes from './routes/ingredientsRoutes.js';
import commentsRoutes from './routes/commentsRoutes.js';
import favoritesRoutes from './routes/favoritesRoutes.js';
import ratingsRoutes from './routes/ratingsRoutes.js';  

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }));
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/recipes', recipesRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/ratings', ratingsRoutes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`L'API est lancé sur  http://localhost:${process.env.SERVER_PORT}`)  ;
});

