const test = require('tape')

const camelCase = require('../lib/camel-case')

test('camelCase -- camelCase a snake_case string', function(t) {
  const snake = 'hello_world'

  t.equal(
    camelCase(snake),
    'helloWorld',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCase -- camelCase a snake_case string with multiple underscores', function(t) {
  const snake = 'apple_orange_pear_banana'

  t.equal(
    camelCase(snake),
    'appleOrangePearBanana',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCase -- Should leave already camelCased alone', function(t) {
  const snake = 'appleOrangePearBanana'

  t.equal(
    camelCase(snake),
    'appleOrangePearBanana',
    'Should return a camelCase string'
  )

  t.end()
})
