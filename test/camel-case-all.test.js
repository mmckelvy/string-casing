const test = require('tape')

const camelCaseAll = require('../lib/camel-case-all')

test('camelCaseAll -- Should work on snake_case', function(t) {
  const str = 'hello_world'

  t.equal(
    camelCaseAll(str),
    'helloWorld',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCaseAll -- Should work on dashes', function(t) {
  const str = 'hello-world'

  t.equal(
    camelCaseAll(str),
    'helloWorld',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCaseAll -- Should work on spaces', function(t) {
  const str = 'hello world'

  t.equal(
    camelCaseAll(str),
    'helloWorld',
    'Should return a camelCase string'
  )

  t.end()
})

test('camelCaseAll -- Should work on all three!', function(t) {
  const str = 'apple pear_banana-grape'

  t.equal(
    camelCaseAll(str),
    'applePearBananaGrape',
    'Should return a camelCase string'
  )

  t.end()
})
