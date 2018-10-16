/*
Proper Cases a string.
*/
module.exports = function properCase(str) {
  if (!str) {
    return str
  }

  let s = ''
  const re = /\s/
  let prev = ''

  for (let i = 0; i < str.length; i++) {
    if (re.test(prev) || i === 0) {
      s += str[i].toUpperCase()

    } else {
      s += str[i].toLowerCase()
    }

    prev = str[i]
  }

  return s
}
