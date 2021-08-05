// TODO: Include packages needed for this application
const { generateMarkdown } = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "What is your project about?",
	},
	{
		type: "input",
		name: "author",
		message: "Author - what is your name?",
	},
	{
		type: "input",
		name: "email",
		message: "Author - what is your email?",
	},
	{
		type: "input",
		name: "portfolio",
		message: "Author - what is your portfolio URL?",
	},
	{
		type: "input",
		name: "story",
		message: "What is your user story for this project?",
	},
	{
		type: "input",
		name: "criteria",
		message: "What is the acceptance criteria for this project?",
	},
	{
		type: "input",
		name: "link",
		message: "What is the URL to the deployed version?",
	},
	{
		type: "checkbox",
		name: "languages",
		message: "What languages did you use for your project?",
		choices: ["HTML", "CSS", "NodeJS", "jQuery", "Git"],
	},
	{
		type: "input",
		name: "credits",
		message: "Who will you like to give credits to for this project?",
	},
	{
		type: "list",
		name: "license",
		message: "What license will you like for your project?",
		choices: ["MIT", "GNU"],
	},
];

// TODO: Create a function to write README file
const writeToFile = (answersObject) => {
	// Generated Readme file can be found in assets/docs/Readme.md
	const genReadmeFile = "./assets/docs/Readme.md";
	fs.writeFile(genReadmeFile, generateMarkdown(answersObject), (err) => {
		if (err) return console.log("Saving your data failed due to error: ", err);
		return console.log("Readme file successfuly generated!");
	});
};

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			writeToFile(answers);
		})
		.catch((err) => {
			if (err) return console.log("Generate readme failed due to error: ", err);
		});
}

// Function call to initialize app
init();
