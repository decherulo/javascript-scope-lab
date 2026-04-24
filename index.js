const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}

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