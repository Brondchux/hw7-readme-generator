// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genReadmeFile = "./assets/docs/Readme.md";

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your readme?",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.appendFile(fileName, data, (err, done) => {
		if (err) return console.log("Saving your data failed due to error: ", err);
		return console.log("Your data was successfuly saved!");
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			writeToFile(genReadmeFile, answers);
		})
		.catch((err) => {});
}

// Function call to initialize app
init();
