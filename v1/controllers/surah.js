const getSurah = (req, res) => {
	let requestedSurahNumber = 0 + req.params.id;
	res.json({
		status: 'ok',
		data: {
			details: [{ _id: null }],
		},
	});
};

export { getSurah };
