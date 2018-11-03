// Converts "dash case" to camelCase
module.exports = function camelCaseDash(str) {
  const regEx = /(-)([a-z])/g

  return str.replace(regEx, (match, p1, p2) => {
    return `${p2.toUpperCase()}`
  })
}
