// making request with jikan api

const request = require("request");
const print = require("./../prettyprinter")

// Data
module.exports = function (query, shownumber) {
print("Loading query:", `"${query}"`)
request("https://api.jikan.moe/v4/anime?q="+query, { json: true},  function(err, res, result) {
	if (!err && res.statusCode == 200) {
		// response
		/*
		let i;
		let a;
		if (body["request_cached"] === true){
			if (shownumber === "true") {
				for (a=1; a<body["results"].length; a++){
					console.log(a+ ". " + body["results"][a]["title"] + "\r");
					console.log("Link: "+ body["results"][a]["url"] + "\n")
				}
			} else {
				for (a=1; a<body["results"].length; a++){
					console.log(body["results"][a]["title"] + "\r");
					console.log("Link: "+ body["results"][a]["url"] + "\n")
				}
			}
		}*/
		result.data.forEach((data) => {
			console.log(data["mal_id"])
		})
	} else {
		console.log("Err")
		return err;
	}
});
}
