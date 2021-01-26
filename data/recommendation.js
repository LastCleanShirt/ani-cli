// making request with jikan api

const request = require("request");

// Data
module.exports = function (query) {
request("https://api.jikan.moe/v3/search/anime?q="+query, { json: true},  function(err, res, body) {
	if (!err && res.statusCode == 200) {
		// response
		let i;
		let a;
		if (body["request_cached"] === true){
			for (a=1; a<body["results"].length; a++){
				console.log(a+ ". " + body["results"][a]["title"] + "\r");
				console.log("Link: "+ body["results"][a]["url"] + "\n")
			}
		}
	} else {
		return err;
	}
});
}

