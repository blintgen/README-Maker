// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license.toLowerCase()) {
    case "mit":
        return "The MIT License is a permissive free software license that allows for reuse with limited restrictions.";
    case "gpl":
        return "The GNU General Public License ensures that software remains free and open-source by requiring derivative works to also be open-source.";
    case "apache":
        return "The Apache License allows users to freely use, modify, and distribute software with an explicit grant of patent rights.";
    case "bsd":
        return "The BSD License is a simple and permissive license that allows for almost unrestricted use of the software.";
    case "mpl":
        return "The Mozilla Public License is a weak copyleft license that allows code to be combined with proprietary code under certain conditions.";
    case "cc0":
        return "CC0 (Creative Commons Zero) effectively places the work in the public domain, allowing unrestricted use.";
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case "mit":
        return "https://opensource.org/licenses/MIT";
    case "gpl":
        return "https://www.gnu.org/licenses/gpl-3.0.html";
    case "apache":
        return "https://www.apache.org/licenses/LICENSE-2.0";
    case "bsd":
        return "https://opensource.org/licenses/BSD-3-Clause";
    case "mpl":
        return "https://www.mozilla.org/en-US/MPL/2.0/";
    case "cc0":
        return "https://creativecommons.org/publicdomain/zero/1.0/";
    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${license}
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

## ${data.description}

## ${data.installation}

## ${data.usage}

### for issues contact ${data.name} at ${data.contact}
`
}

export default generateMarkdown;
