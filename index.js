import express from 'express';
import v1_surahRoutes from './v1/routes/surah.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api/v1', v1_surahRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
