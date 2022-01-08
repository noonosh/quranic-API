var express = require('express');
var path = require('path');
var app = express();

app.get('/surah/:reciter/:id', function (req, res) {
	let requestedSurahNumber = 0 + req.params.id;
	res.json({
		ok: true,
		responose_code: 200,
		status: 'success',
		data: {
			surahNo: requestedSurahNumber,
			reciter: req.params.reciter,
		},
	});
});

app.get('/surah/:reciter/:id/download', function (req, res) {
	let requestedSurahNumber = 0 + req.params.id;
	var fileName = requestedSurahNumber + '-al-mulk.mp3';
	res.download(path.join(__dirname, `data/${fileName}`));
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
