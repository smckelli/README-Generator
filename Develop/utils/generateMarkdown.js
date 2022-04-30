// TODO: Create a function that returns a license badge based on which license is passed in
const licenseBadge = (license) => {
  if (license === "None")
    return "";
    else if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === "Apache 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === "GNU (GPL) 2.0") {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    }
    else if (license === "GNU (GPL) 3.0") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (license === "BSD 2.0") {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    else if (license === "ISC") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else if (license === "Artistic 2.0") {
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
    else if (license === "Perl") {
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
    else if (license === "Boost") {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (license === "Mozilla") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.descOver} ${data.descMot} ${data.descLearn}

  ## Table of Contents

*** [Installation] (#Installation)
*** [Usage] (#Usage)
*** [Credits] (#Credits)
*** [License] (#License)
*** [Developer] (#Developer)
*** [URL] (#URL)
*** [Repository] (#Repository)

# Installation

${data.install}

# Usage

${data.usage}

# Credits

${data.credits}

# License

${data.license}

# Developer

This project was developed by ${data.developer} known as ${data.userName} who can be reached at <${data.userEmail}>

# URL

The live link to the project is at <${data.liveURL}

# Repository

The repository for this project can be seen at <${data.repo}

`;
};

module.exports = generateMarkdown;
