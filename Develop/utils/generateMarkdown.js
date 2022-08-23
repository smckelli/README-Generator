// TODO: Create a function that returns a license badge based on which license is passed in
const showBadge = (license) => {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU (GPL) 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MPL") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "BSD 2.0") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  }  else if (license === "GNU (GPL) 2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "Artistic 2.0") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license === "Perl") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === "Mozilla (MPL)") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
};

const licenseSection = (license) => {
  if (license === "None") {
    return " ";
  } else {
    return `# License
  This project is covered under the ${license} license. For more information click here ${showBadge(
      license
    )}.`;
  }
};

const showLicense = (license) => {
  if (license === "none") return "";
  else {
    return `* [License](#license)`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${showBadge(data.license)}

  ${data.descOver} ${data.descMot} ${data.descLearn}

# Installation

${data.install}

# Usage

${data.usage}

# Credits

${data.credits}

${licenseSection(data.license)}

# Developer

This project was developed by ${data.developer}, known as ${data.userName}, who can be reached at <${data.userEmail}>

# URL

The live link to the project is at <${data.liveURL}>

# Repository

The repository for this project can be seen at <${data.repo}>

### This README was made with my Readme Generator at https://github.com/smckelli/readme-generator

`;
};



module.exports = generateMarkdown

