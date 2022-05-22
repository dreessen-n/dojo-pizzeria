// make pizza object
// Lines 1 - 25 are my code.
// lines 29 - 104 are code from solution
// I copied for learning purposes. I did NOT solve

function pizzaOven(crust, sauce, cheese, meat, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauce = sauce;
    pizza.cheeses = cheese;
    pizza.meat = meat;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven('deep dish', 'traditional', 'mozzarella', ['pepperoni, sausage']);

var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], 'none', ['mushrooms', 'olives', 'onions']);

var pizzaMine1 = pizzaOven('thick', 'pesto', 'feta', 'sausage', 'peppers');

var pizzaMine2 = pizzaOven('thick', 'red', 'cheddar', 'ham', 'pineapple');

console.log(pizza1);
console.log(pizza2);
console.log(pizzaMine1);
console.log(pizzaMine2);


// I did NOT write the bonus. It is from the solution
// I copied it here so I can work thru how to do it later
// I did NOT solve the bonus - just to be clear
// NOT MY CODE - here for learning purpose
// though I did change a line of the code on line 96
// the min was set to 0, I changed to 1 so at least 
// one topping would come out.

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 1); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());