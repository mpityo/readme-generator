// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 'mta';
}

function renderInstallationSection(install) {
  if (!install) {
    return "";
  } else {
    return `## Installation
${install}`;
  }
}
function renderUsageSection(usage) {
  if (!usage) {
    return "";
  } else {
    return `## Usage
${usage}`;
  }
}
function renderContributingSection(contribute) {
  if (contribute === "") {
    return "";
  } else {
    return `## Contributing
${contribute}`;
  }
}

function renderTableOfContents(data) {
  let arr = ["[Description](#description)"];
  let string = "";
  if (renderInstallationSection(data.instructions) !== "")
    arr.push("[Installation](#installation)");
  if (renderUsageSection(data.usage) !== "")
    arr.push("[Usage](#usage)");
  if (renderContributingSection(data.contributing) !== "")
    arr.push("[Contributing](#contributing)");
  
  arr.push("[Tests](#tests)");
  if (renderLicenseSection(data.license) !== "")
    arr.push("[License](#license)");
  arr.push("[Questions](#questions)");

  arr.forEach((element, index) => {
    string += `
${index+1}. ${element}`;
  });

  return string;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
${renderTableOfContents(data)}

## Description
${data.description}

${renderInstallationSection(data.instructions)}

${renderInstallationSection(data.usage)}

${renderInstallationSection(data.contributing)}

## Tests
${data.testing}

## License

## Questions
You may reach me at GitHub under [${data.github}]('https://github.com/${data.github}')
<br>
You can also email me at [${data.email}]('mailto:${data.email}')
`;
}

module.exports = generateMarkdown;
