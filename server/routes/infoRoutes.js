import { Router } from 'express';
import { getInfo } from '../controllers/infoController.js';

const router = Router();

router.get('/', getInfo);

export default router;
