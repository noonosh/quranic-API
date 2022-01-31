import fs from 'fs';

const getSurah = (req, res) => {
	// Format the number
	let requestedSurahNumber =
		req.params.id < 100 ? '0' + req.params.id : req.params.id;

	res.status(200).send({
		ok: true,
		data: {
			number: requestedSurahNumber,
		},
	});
};

const allSurahs = (req, res, next) => {
	const data = JSON.parse(fs.readFileSync('./data/surahs.json'));

	if (typeof data === 'undefined') {
		res.status(500).send({
			ok: false,
			description: 'Something went wrong',
		});
		return;
	}
	res.status(200).send({
		ok: true,
		data,
	});
};

const downloadSurah = (req, res) => {
	const file = './data/alafasy/001-al-fatihah.mp3';

	res.status(200).download(file);
};

export { getSurah, downloadSurah, allSurahs };
