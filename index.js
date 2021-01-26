#!/usr/bin/env node

// extra variables
const version = "1.0.0";



// data
const searchData = require("./data/searchData.js");

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
		searchData(query);
		console.log(query);
		/*if (!searchData === false){
			console.log(searchData);
		} else {
			console.log(searchData);
		}*/
	})

program.parse(process.argv);
