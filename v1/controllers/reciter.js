import fs from 'fs';

const getReciters = (req, res, next) => {
	const data = JSON.parse(fs.readFileSync('./data/reciters.json'));

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

export { getReciters };
