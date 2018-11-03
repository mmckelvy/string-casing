// Converts camelCase to standard case
module.exports = function standardCase(str) {
  // Capitalize the first letter
  const capped = `${str[0].toUpperCase()}${str.slice(1)}`

  const regEx = /[A-Z]/g

  // Lowercase and space all but the first letter
  const rest = capped.slice(1).replace(regEx, (match) => {
    // Add a space where the camelCase piece was
    return ` ${match.toLowerCase()}`
  })

  return `${capped[0]}${rest}`
}
