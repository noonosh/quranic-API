import express from 'express';
import { getSurah } from '../controllers/surah.js';

const router = express.Router();

router.get('/', getSurah);

export default router;
