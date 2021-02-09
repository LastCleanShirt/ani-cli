#!/usr/bin/env node

// extra variables
const version = "1.0.0";

// utf8 library to convert string ot utf8
const utf8 = require("utf8");

// data
const searchAnimeData = require("./data/searchAnimeData.js");
const recommendationData = require("./data/recommendationData.js");
const searchCharacterData = require("./data/searchCharacterData.js");

// config function
const readConfig = require("./config.js");

// fs
const fs = require("fs");

// function to read colors configuration
const readColors = function(){
	let colors = fs.readFile("colors.json", "utf8", (err, data) => {
		if (err){
			return null;
		} else {
			console.log(data["title"]);
		}
	})
}

// config options
readConfig("config.json", function(configuration) {
});

// configuration
let config = JSON.parse(fs.readFileSync("config.json", "utf8"));

// commander.js
const { Command } = require("commander");
const program = new Command();

// version
program.version(version);

// search options
program
	// search options
	.command("searchAnime <query>")
	.alias("sa")
	.description("Search anime with specific query")
	.action((query) => {
		searchAnimeData(query, config.shownumber);
		/*if (!searchData === false){
			console.log(searchData);
		} else {
			console.log(searchData);
		}*/
	})

// recommendation options
program
	// recommendation options
	.command("recommendation")
	.alias("r")
	.description("Get top anime recommendation")
	.action(() => {
		recommendationData();
	})

// configuration options
program
	// configuration options
	.command("configurationEdit <object> <value>")
	.alias("ce")
	.description("Edit configuration")
	.action((object, value) => {
		// configuration
		/*const prettier = require("prettier");
		const DotJson = require("dot-json");
		const config = new DotJson("config.json");
		config.set(object, value).set(object, value).save();*/
		
		
		
		const fs = require("fs");
		
		const prettier = require("prettier");
		
		function replaceFileContents(file, replacements) {
			fs.writeFileSync(file, replacements);
		}
		
		let rawconfig = fs.readFileSync("config.json");
		let config = JSON.parse(rawconfig);
		config[object] = value
		let data = JSON.stringify(config, null, 2);
		let replace = replaceFileContents("config.json", data);
		console.log(JSON.parse(rawconfig));
		// console.log(config);
		
	})

// list configuration options
program
	// list configuration options
	.command("configurationList")
	.alias("cl")
	.description("List all of the configuration")
	.action(() => {
		const fs = require("fs");
		const prettier = require("prettier");
		let configuration = fs.readFileSync("config.json", "utf8");
		console.log(prettier.format(JSON.parse(JSON.stringify(configuration)),{ semi: false, parser: "json" }));
	})

// search character options
program
	// search character options
	.command("searchCharacter <query>")
	.alias("sc")
	.description("Search Anime/Manga character with specific query")
	.action((query) => {
		searchCharacterData(query, config.shownumber)
	})

// list color configuration options
program
	// list color configuration options
	.command("colorList")
	.alias("colorL")
	.description("List all of the color configurations")
	.action(() => {
		let colors = fs.readFile("colors.json", "utf8", (err, data) => {
			if (err){
				return null;
			} else {
				let obj = JSON.parse(data);
				let title = obj["title"];
				// console.log(title.toString() + "Hi");
				console.log(JSON.stringify(title.replace(/\\\\/g, "\\") + "HI"));
			}
		})
	})

program.parse(process.argv);
