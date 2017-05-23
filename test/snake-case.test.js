const test = require('tape')

const snakeCase = require('../lib/snake-case')

test('snakeCase -- snake_case a camelCase string', function(t) {
  const camel = 'helloWorld'

  t.equal(
    snakeCase(camel),
    'hello_world',
    'Should return a snake_case string'
  )

  t.end()
})

test('snakeCase -- snake_case a camelCase string with multiple caps', function(t) {
  const camel = 'appleOrangePearBanana'

  t.equal(
    snakeCase(camel),
    'apple_orange_pear_banana',
    'Should return a snake_case string'
  )

  t.end()
})
