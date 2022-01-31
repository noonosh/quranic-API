import express from 'express';
import { getSurah, allSurahs, downloadSurah } from '../controllers/surah.js';

const router = express.Router();

router.get('/all', allSurahs);
router.get('/:id', getSurah);
router.get('/:id/download', downloadSurah);

export default router;
