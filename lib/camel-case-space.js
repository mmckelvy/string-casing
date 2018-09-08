// Camel cases separate words.  e.g. accounts receivable -> accountsReceivable
module.exports = function camelCaseSpace(str) {
  const regEx = /(\s+)([a-z])/g

  return str.toLowerCase().replace(regEx, (match, p1, p2) => {
    return `${p2.toUpperCase()}`
  })
}

