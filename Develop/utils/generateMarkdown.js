// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length != 0){
    return license
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length != 0){
    return license
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license.name)
  renderLicenseLink(license.link)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## ${data.description}

## ${data.installation}

## ${data.usage}

## ${renderLicenseSection(data.license)}



`
}

export default generateMarkdown;
