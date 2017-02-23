/* global describe, it, expect, beforeAll */
'use strict'

const underTest = require('../lib/cocktails')

describe('Cocktail', () => {
  let cocktail
  beforeAll(() => {
    cocktail = new underTest()
  })

  it('should be a class', () => {
    expect(typeof underTest).toBe('function')
    expect(cocktail instanceof underTest).toBeTruthy()
  })
})
