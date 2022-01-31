import express from 'express';
import { getReciters } from '../controllers/reciter.js';

const router = express.Router();

router.get('/', getReciters);

export default router;
