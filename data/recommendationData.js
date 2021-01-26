// making request with jikan api

const request = require("request");

// Data
module.exports = function () {
request("https://api.jikan.moe/v3/top/anime", { json: true},  function(err, res, body) {
	if (!err && res.statusCode == 200) {
		// response
		let a;
		if (body["request_cached"] === true){
			//for (a=1; a<body["top"].length; a++){
			a = Math.random() * (body["top"].length - 0) + 0;
			console.log(
				body["top"][Math.floor(a)]["title"] + "\n" + 
				body["top"][Math.floor(a)]["type"] + "\n" +
				body["top"][Math.floor(a)]["episodes"] + " Episodes" + "\n" +
				"Rating: " + body["top"][Math.floor(a)]["score"] + "\n\n" +
				body["top"][Math.floor(a)]["url"] + "\n"
				);
			//}
		}
	} else {
		return err;
	}
});
}

