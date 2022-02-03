import fs from 'fs';

const renameFiles = parentDirectory => {
	let allFiles = fs.readdirSync(parentDirectory);

	if (allFiles[0] == '001.mp3') return;

	for (let i = 0; i < allFiles.length; i++) {
		fs.renameSync(
			parentDirectory + allFiles[i],
			parentDirectory + allFiles[i].substring(0, 3) + '.mp3',
		);
	}
};

const getDirectories = source =>
	fs
		.readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

const fetchSurahQuery = q => {
	let id = q.params.id;
	let reciter = q.params.reciter;

	const reciters = getDirectories('./data/');

	if (
		0 >= parseInt(id) >= 115 ||
		id.length != 3 ||
		!reciters.includes(reciter)
	) {
		return false;
	}

	return { id, reciter };
};

const getSurah = (req, res) => {
	if (fetchSurahQuery(req) == false) {
		res.status(404).send({
			ok: false,
			description: 'Surah or reciter not found.',
		});
		return;
	}

	res.status(200).send({
		ok: true,
		data: {
			number: fetchSurahQuery(req).id,
			reciter: fetchSurahQuery(req).reciter,
		},
	});
};

const downloadSurah = (req, res) => {
	let reciter = fetchSurahQuery(req).reciter;
	let surahID = fetchSurahQuery(req).id;

	renameFiles(`./data/${reciter}/`);
	const file = `./data/${reciter}/${surahID}.mp3`;

	res.status(200).download(file);
};

export { getSurah, downloadSurah };
