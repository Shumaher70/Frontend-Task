import express from 'express';
import { getAuthor } from '../controllers/authorController.js';

const router = express.Router();

router.get('/', getAuthor);

export default router;
