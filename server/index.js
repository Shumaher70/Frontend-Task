import express, { json } from 'express';
const app = express();
import cors from 'cors';

app.use(cors());
app.use(json());

// Подключаем маршруты

import profileRoutes from './routes/profileRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import logoutRoutes from './routes/logoutRoutes.js';
import infoRoutes from './routes/infoRoutes.js';

// Используем маршруты

app.use('/api/info', infoRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/author', authorRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/logout', logoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
