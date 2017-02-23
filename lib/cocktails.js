'use strict'

const rp = require('minimal-request-promise')

class Cocktail {
  constructor() {}

  getRandom() {
    return rp.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(rawResponse => JSON.parse(rawResponse.body))
      .then(response => response.drinks[0])
      .then(this.normalize)
  }

  find(cocktailName) {
    return rp.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + encodeURIComponent(cocktailName))
      .then(rawResponse => JSON.parse(rawResponse.body))
      .then(response => response.drinks[0])
      .then(this.normalize)
  }

  normalize(cocktailDetails) {
    let ingredientsList = []
    for (let i = 1; i < 16; i++) {
      if (cocktailDetails[`strIngredient${i}`])
        ingredientsList.push({
          name: cocktailDetails[`strIngredient${i}`],
          measure: cocktailDetails[`strMeasure${i}`]
        })
    }
    return {
      name: cocktailDetails.strDrink,
      ingredients: ingredientsList
    }
  }
}

module.exports = Cocktail
