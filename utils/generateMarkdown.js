// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
	title,
	description,
	author,
	email,
	portfolio,
	story,
	criteria,
	link,
	languages,
	credits,
	license,
}) => {
	return `# ${title}

## Project Description

${description}

---

## Table of Content

1. [Project Description](#project-description)
2. [Author Info](#author-info)
3. [User Story](#user-story)
4. [Acceptance Criteria](#acceptance-criteria)
5. [Mock-Up Preview](#mock-up-preview)
6. [Useful Links](#useful-link)
7. [Tech Stack](#tech-stack)
8. [Credits](#credits)
9. [License](#license)

---

## Author Info

Name: ${author}

Email: ${email}

Portfolio: ${portfolio}

---

## User Story
\`\`\`
${story}
\`\`\`
---

## Acceptance Criteria

\`\`\`
${criteria}
\`\`\`

---

## Mock-up Preview

COMING SOON!!!

---

## Useful Links

[Deployed Application](${link})

---

## Tech Stack

${languages}

---

## Credits

${credits}

---

## license

${license}

`;
};

module.exports = {
	generateMarkdown,
};
