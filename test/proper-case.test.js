const test = require('tape')

const properCase = require('../lib/proper-case')

test('properCase -- Proper case a camelCased string', function(t) {
  const str = 'helloWorld'

  t.equal(
    properCase(str),
    'Hello world',
    'Should return a proper case string'
  )

  t.end()
})

test('properCase -- Proper case a string with multiple camels', function(t) {
  const str = 'appleOrangePearBanana'

  t.equal(
    properCase(str),
    'Apple orange pear banana',
    'Should return a proper case string'
  )

  t.end()
})


