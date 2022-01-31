import express from 'express';
import surahRoutes from './v1/routes/surah.js';
import reciterRoutes from './v1/routes/reciter.js';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());

app.use('/api/v1/surah', surahRoutes);
app.use('/api/v1/reciters', reciterRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
