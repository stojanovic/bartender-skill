/*global beforeEach, afterEach */
const fake = require('fake-http-request')
beforeEach(() => {
  fake.install('https')
})
afterEach(() => {
  fake.uninstall('https')
})
