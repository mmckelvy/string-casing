const test = require('tape')

const properCase = require('../lib/proper-case')

test('properCase -- Proper case all caps', function(t) {
  const str = 'HELLO WORLD'

  t.equal(
    properCase(str),
    'Hello World',
    'Should return a proper case string'
  )

  t.end()
})

test('properCase -- Proper case all lower', function(t) {
  const str = 'hello world'

  t.equal(
    properCase(str),
    'Hello World',
    'Should return a proper case string'
  )

  t.end()
})
