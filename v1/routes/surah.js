import express from 'express';
import { getSurah, downloadSurah } from '../controllers/surah.js';

const router = express.Router();

router.get('/:id/:reciter', getSurah);
router.get('/:id/:reciter/download', downloadSurah);

export default router;
