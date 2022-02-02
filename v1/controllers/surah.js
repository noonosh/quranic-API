import fs from 'fs';

const getSurah = (req, res) => {
	res.status(200).send({
		ok: true,
		data: {
			number: fetchSurahQuery(req).id,
			reciter: fetchSurahQuery(req).reciter,
		},
	});
};

const fetchSurahQuery = req => {
	let id = req.params.id;
	let reciter = req.params.reciter;
	return { id, reciter };
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
