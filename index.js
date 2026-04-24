// Write your solution in this file!

// Task 1: Array Creation and Initialization
var burgers = ["hamburger", "cheeseburger"];

// Task 2: String Creation and Initialization
var drink = "cookie vanilla milkshake";

// Task 3: String Function is Changed
function updateFeaturedItem() {
  drink = "strawberry milkshake";
}
updateFeaturedItem();

// Task 4: Block Scoped Function
function addNewBurger() {
  let newBurger = "triple cheeseburger";
  burgers.push(newBurger);
}
addNewBurger();