function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
}
return menuItem
}

function addIngredients(toppings, ingredients) {
  if (!ingredients.includes(toppings)) {
 ingredients.push(toppings);
 }
}

function formatPrice(initialPrice){
  var formatPrice = "$" + initialPrice;
  return formatPrice
}

function decreasePrice(decreasedPrice) {
var decreasedPrice = decreasedPrice * 0.9
return decreasedPrice
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}



