import express from 'express';
import { getReciter } from '../controllers/reciter.js';

const router = express.Router();

router.get('/', getReciter);

export default router;
