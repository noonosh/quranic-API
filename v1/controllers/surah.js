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

export { getSurah };
