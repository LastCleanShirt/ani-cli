// making request with jikan api

const request = require("request");

// Data
module.exports = function (query, shownumber) {
request("https://api.jikan.moe/v3/search/character?q="+query, { json: true},  function(err, res, body) {
	if (!err && res.statusCode == 200) {
		// response
		let i;
		let a;
		if (body["request_cached"] === true){
			if (shownumber === "true") {
				for (a=1; a<body["results"].length; a++){
					console.log(a+ ". Name: " + body["results"][a]["name"] + "\r");
					console.log("Link: "+ body["results"][a]["url"] + "\n")
				}
			} else {
				for (a=1; a<body["results"].length; a++){
					console.log(body["results"][a]["name"] + "\r");
					console.log("Link: "+ body["results"][a]["url"] + "\n")
				}
			}
		}
	} else {
		return err;
	}
});
}

