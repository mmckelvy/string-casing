const test = require('tape')

const camelCaseDash = require('../lib/camel-case-dash')

test('camelCaseDash -- camelCase a dashed string', function(t) {
  const dashed = 'hello-world'

  t.equal(
    camelCaseDash(dashed),
    'helloWorld',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCaseDash -- camelCase a dashed string with multiple dashes', function(t) {
  const dashed = 'apple-orange-pear-banana'

  t.equal(
    camelCaseDash(dashed),
    'appleOrangePearBanana',
    'Should return a camelCase string'
  )

  t.end()
})

