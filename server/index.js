import express, { json } from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

const app = express();

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

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
