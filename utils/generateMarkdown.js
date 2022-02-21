// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "GPL 3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "GPL 2.0":
      return "https://img.shields.io/badge/License-GPL_v2-blue.svg";
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case "BSD 3":
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    case "BSD 2":
      return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
    case "LGPL 3.0":
      return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
    default:
      return "https://google.com/search?q=" + license + "+license";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "GPL 2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "BSD 2":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "LGPL 3.0":
      return "https://www.gnu.org/licenses/lgpl-3.0";
    default:
      return "https://google.com/search?q=" + license + "+license";
  }
}

function renderLicenseBadge(license) {
  let string = "";
  license.forEach((element) => {
    string += `[![${element}](${getLicenseBadge(element)})](${renderLicenseLink(element)})  
`;
  });
  return `${string}
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != []) {
    let string = `## License
`;
    if (license.length > 1) {
      string += 
`This project is licensed under the terms of the following licenses:`;
      license.forEach((element) => {
        string += 
`
- [${element}](${renderLicenseLink(element)})
`;
      });
      return string;
    } else {
      string += 
`This project is licensed under the terms of the [${license}](${renderLicenseLink(license)}) license`;
      return string;
    }
  }
  return "";
}

// only render these sections if the user input data
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

// render the table of contents based on what the user entered as information
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

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
${renderTableOfContents(data)}

## Description
${data.description}

${renderInstallationSection(data.instructions)}

${renderUsageSection(data.usage)}

${renderContributingSection(data.contributing)}

## Tests
${data.testing}

${renderLicenseSection(data.license)}

## Questions
You may reach me at GitHub under [${data.github}]('https://github.com/${data.github}')
<br>
You can also email me at [${data.email}]('mailto:${data.email}')
`;
}

module.exports = generateMarkdown;
