const camelCase = require('./camel-case')
const camelCaseDash = require('./camel-case-dash')
const camelCaseSpace = require('./camel-case-space')

// Camelcases strings separated by dashes, underscores, or spaces
// @param str should be lowercased
module.exports = function camelCaseAll(str) {
  const spaced = camelCaseSpace(str)
  const dashed = camelCaseDash(spaced)
  return camelCase(dashed)
}
