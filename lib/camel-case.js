// Converts snakeCase to camelCase
module.exports = function camelCase(str) {
  const regEx = /(_)([a-z])/g

  return str.toLowerCase().replace(regEx, (match, p1, p2) => {
    return `${p2.toUpperCase()}`
  })
}
