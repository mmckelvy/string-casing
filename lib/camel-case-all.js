const camelCase = require('./camel-case')
const camelCaseDash = require('./camel-case-dash')
const camelCaseSpace = require('./camel-case-space')

// Camelcases strings separated by dashes, underscores, or spaces
// Converts snakeCase to camelCase
module.exports = function camelCase(str) {
  const regEx = /(_|\s+|-)([a-z])/g

  return str.toLowerCase().replace(regEx, (match, p1, p2) => {
    return `${p2.toUpperCase()}`
  })
}
