// TODO: Create a function that returns a license badge based on which license is passed in

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.descOver} ${data.descMot} ${data.descLearn}

# Installation

${data.install}

# Usage

${data.usage}

# Credits

${data.credits}

# License

${data.license}

# Developer

This project was developed by ${data.developer}, known as ${data.userName}, who can be reached at <${data.userEmail}>

# URL

The live link to the project is at <${data.liveURL}>

# Repository

The repository for this project can be seen at <${data.repo}>

`;
};

module.exports = generateMarkdown

