const test = require('tape')

const camelCaseSpace = require('../lib/camel-case-space')

test('camelCaseSpace -- camelCase a string with spaces', function(t) {
  const str = 'hello world'

  t.equal(
    camelCaseSpace(str),
    'helloWorld',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCase -- camelCase a string with multiple spaces', function(t) {
  const str = 'apple orange pear banana'

  t.equal(
    camelCaseSpace(str),
    'appleOrangePearBanana',
    'Should return a camelCase string'
  )

  t.end()
})

