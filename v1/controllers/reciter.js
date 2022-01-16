import jsonReader from '../../lib/readFromFile.js';

const getReciter = (req, res, next) => {
	// const data = readFromFile('');

	const data = jsonReader(
		'/Users/nuriddin/Documents/dev/quranic-API/data/reciters.json',
		(err, customer) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(customer.address); // => "Infinity Loop Drive"
		},
	);

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

export { getReciter };
