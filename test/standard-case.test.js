const test = require('tape')

const standardCase = require('../lib/standard-case')

test('standardCase -- Standard case a camelCased string', function(t) {
  const str = 'helloWorld'

  t.equal(
    standardCase(str),
    'Hello world',
    'Should return a standard case string'
  )

  t.end()
})

test('standardCase -- Standard case a string with multiple camels', function(t) {
  const str = 'appleOrangePearBanana'

  t.equal(
    standardCase(str),
    'Apple orange pear banana',
    'Should return a standard case string'
  )

  t.end()
})


