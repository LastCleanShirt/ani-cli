module.exports = function (file, obj) {
	const fs = require("fs");
	fs.readFile(file, "utf8", (err, data) => {
		if (err) { 
			throw err;
		} else {
			const config = JSON.parse(data);
			return config[obj];
		}
	})
}
