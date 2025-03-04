import { logout } from '../controllers/logoutController.js';
import express from 'express';

const router = express.Router();

router.get('/', logout);

export default router;
