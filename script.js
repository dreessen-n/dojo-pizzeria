// make pizza object

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


