'use strict'

const Cocktail = require('./cocktails')

module.exports = function(parsedMessage) {
  const cocktail = new Cocktail()
  if (parsedMessage.type === 'IntentRequest' && parsedMessage.intent.name === 'GetIngredients')
    return cocktail.find(parsedMessage.intent.slots.Cocktail.value)
      .then(cocktail => {
        console.log('cocktail', cocktail)
        const ingredients = cocktail.ingredients.map(ingredient => ingredient.measure + ' of ' + ingredient.name).slice(0, -1).join(', ') + ' and ' + cocktail.ingredients.slice(-1)[0].measure + ' of ' + cocktail.ingredients.slice(-1)[0].name
        return `You need: ${ingredients}`
      })
      .catch(() => {
        return `Hm, I can't find ${parsedMessage.intent.slots.Cocktail.value} cocktail.`
      })

  if (parsedMessage.type === 'IntentRequest' && parsedMessage.intent.name === 'RandomCocktail')
    return cocktail.getRandom()
      .then(cocktail => {
        const ingredients = cocktail.ingredients.map(ingredient => ingredient.name).slice(0, -1).join(', ') + ' and ' + cocktail.ingredients.slice(-1)[0].name
        return `How about ${cocktail.name}? With ${ingredients}`
      })
}
