
function takeOrder(orders, deliveryOrders) {
  if (!deliveryOrders.includes(orders) && deliveryOrders.length < 3) {
    deliveryOrders.push(orders)
 } 
}

function refundOrder(orderNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }

  }
}


//Psuedocode
//should add item names one at a time from each object in the order array into string
function listItems(orderArray) {
  var itemString = ""
  for (var i = 0; i < orderArray.length; i++){
    if (itemString === ""){
      itemString = orderArray[i].item 
    } else {
    itemString = `${itemString}, ${orderArray[i].item}`
    }
  }
  return itemString
}


// PsuedoCode
//Search order
// - It should be a function with 2 parameters (orderArray, itemName)
// - it needs to tell us if a ceratin order is in the list using the item name. 
// - inputs are delivery order array and object key;value
// - needs to return a boolean indicating true or false

function searchOrder(orderArray, itemName) {
  var listOfItems = [];
  for (var i = 0; i < orderArray.length; i ++) {
    listOfItems += `${orderArray[i].item}`
  }                                         //tried an else statement here like in the listItems func above
  return listOfItems.includes(itemName)     // and it just would not run/threw more errors. 
}







module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}