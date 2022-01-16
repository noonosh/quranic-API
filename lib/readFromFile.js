import fs from 'fs';

function jsonReader(filePath, cb) {
	fs.readFile(filePath, (err, fileData) => {
		if (err) {
			return cb && cb(err);
		}
		try {
			const object = JSON.parse(fileData);
			return cb && cb(null, object);
		} catch (err) {
			return cb && cb(err);
		}
	});
}

// const readFromFile = pathToFile => {
// 	fs.readFile(pathToFile, (err, jsonString) => {
// 		if (err) {
// 			console.error('File read failed:', err);
// 			return;
// 		}
// 		return JSON.parse(jsonString);
// 	});
// };

export default jsonReader;
