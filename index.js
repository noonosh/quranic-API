import express from 'express';
import surahRoutes from './v1/routes/surah.js';
import reciterRoutes from './v1/routes/reciter.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api/v1/surah', surahRoutes);
app.use('/api/v1/reciter', reciterRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
