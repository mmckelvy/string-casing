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
