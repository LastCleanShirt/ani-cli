#!/usr/bin/env node

// extra variables
const version = "1.0.0";

// data
const searchData = require("./data/searchData.js");
const recommendationData = require("./data/recommendationData.js");

// config function
const readConfig = require("./config.js");

// fs
const fs = require("fs");

// commander.js
const { Command } = require("commander");
const program = new Command();

// version
program.version(version);

// search options
program
	// search options
	.command("search <query>")
	.alias("s")
	.description("Search anime with specific query")
	.action((query) => {
		const config = readConfig("./config.json", "shownumber");
		searchData(query, config)
		console.log(query);
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
		console.log("configurationEdit is on a problem...");
		/*
		// configuration
		const fs = require("fs");
		const config = fs.readFileSync("config.json", "utf8");
		let configshownumber = config["shownumber"];
		
		JSON.parse(config[object]) = value
		
		function replaceContents(file, replacement, cb) {
			fs.readFile(file, (err, contents) => {
				if (err) return cb(err);
				fs.writeFile(file, contents, cb);
			});
		}
		
		console.log(object + " " + value + " " + JSON.parse(config));
		replaceContents("config.json", config, err => {
			if (err) { throw err }
			console.log("Successfuly changed object");
		})*/
	})

program.parse(process.argv);
