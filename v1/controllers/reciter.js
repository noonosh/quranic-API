const getReciter = (req, res, next) => {
	reciters = JSON.parse();
	res.status(200).send({
		ok: true,
		data: req.body,
	});
};

export { getReciter };
