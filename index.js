// Write your solution in this file!

// Global variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Task 3: Change featured drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}

// Task 4: Add burgers
function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
  if (true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
  }
}
addBurger();
changeFeaturedDrink();