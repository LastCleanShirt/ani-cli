#!/usr/bin/env node

// extra variables
const version = "1.0.0";



// data
const getData = require("./data.js");

// commander.js
const { Command } = require("commander");
const program = new Command();

// version
program.version(version);

// options
program
	// search options
	.command("search <query>")
	.alias("s")
	.description("Search anime with specific query")
	.action((query) => {
		getData(query);
		console.log(query);
		/*if (!searchData === false){
			console.log(searchData);
		} else {
			console.log(searchData);
		}*/
	})

program.parse(process.argv);
