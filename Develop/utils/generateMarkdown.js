// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length != 0){
    return `# ${license}\n`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length != 0){
    return `# ${license}\n`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  return `${renderLicenseBadge(license.name)} ${renderLicenseLink(license.link)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}###${renderLicenseSection(data.license)}

## ${data.description}

## ${data.installation}

## ${data.usage}


### for issues contact ${data.name} at ${data.contact}
`
}

export default generateMarkdown;
