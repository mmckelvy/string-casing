// Converts camelCase to snakeCase
module.exports = function snakeCase(str) {
  const regEx = /[A-Z]/g

  return str.replace(regEx, (match) => {
    return `_${match.toLowerCase()}`
  })
}
