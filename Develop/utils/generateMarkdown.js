// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[License](#license)`


  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `This project is under the ${license} license`
  }
  return '';
}



// TODO: Create a function to generate markdown for README

// one long string based on user input
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.badges)}
 
  ## Description
 
  ${data.description}
 
  
 ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Contributor](#contributor)
  - [Tests](#tests)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
 
  ${data.usage}
 
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
    
    
  
  ## Credits
 
  ${data.credits}
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
 
  ${renderLicenseSection(data.license)}
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## Contributor
  
  ${data.contributor}
  
  ## Tests
  
  ${data.tests}
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
