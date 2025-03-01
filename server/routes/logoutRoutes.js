import { logout } from '../controllers/logoutController.js';
import express from 'express';

const router = express.Router();

router.delete('/', logout);

export default router;
