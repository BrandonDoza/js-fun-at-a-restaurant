


//Create Restaurant
// Psuedocode
// it should be a function
// it should store info about the restaurant in an object
// the function has 1 parameter as there is 1 argument
// The restaurant should have a name that can be changed dynamically
// The restaurant should have menus that can be changed dynamically
// Currently arepa has the name value of sexy pizza

function createRestaurant(nameString) {
  return {
    name: `${nameString}`,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}



// Add Menu Item
//Psuedocode
// it should be function
// it should invoke the createRestaurant function
// and access the menu - lunch - 0 index of the array
// it is the inserting the object bbqPizza into the 0 position

function addMenuItem(pizzaRestaurant, pizzaType) {
  var menu = pizzaRestaurant.menus[pizzaType.type];    //this variable is shortening the code by turning menu
  var itemExists = false;                               // into bbq pizza's menu type
  for (var i = 0; i < menu.length; i++) {       //this for loop is scanning through the pizza types (menu var)
    if (menu[i].name === pizzaType.name) {     //if lunch is strictly equal to lunch basically what it's saying
      itemExists = true;                      //reassigning the value of item exists from above to true
    }
  }
  if (!itemExists) {                          //saying if its the opposite of item exist (using bang operator !)
    menu.push(pizzaType)                      // we want to push the pizza type (argument being pushed in from test) 
  }                                           // into the corresponding menu
}

// Remove Menu Item
// It should be a function
// It needs to remove an item to update it, then 
// There are 3 parameters when the function is invoked

  function removeMenuItem(pizzaRestaurant, itemName, menuType) {
    var menu = pizzaRestaurant.menus[menuType];
    var itemIndex = -1;

    for (var i = 0; i < menu.length; i++) {
      if (menu[i].name === itemName) {
        itemIndex = i
      }
    }
    if (itemIndex !== -1) {
      menu.splice(itemIndex, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
    } else {
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
    }
  }
       
  // checkForFood
  // we need to see if a requested item is on the menu and say yes/no on
  // whether its being served. 


  function checkForFood(restaurant, foodItem) {
    var onMenu = foodItem.type;
    for (var i = 0; i < restaurant.menus[onMenu].length; i++) {
      if (restaurant.menus[onMenu][i].name === foodItem.name) {
        return `Yes, we're serving ${foodItem.name} today!`
      }                                                         //tried an else statement here like in the removeItems func above
    }                                                            // and it just would not run/threw more errors. 
    return `Sorry, we aren't serving ${foodItem.name} today.`
    
  }

  
  

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}