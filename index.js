// we have x Number, of apple, y num orange,

// let , const

function foodProcessor(fruit) {
  // console.log(apple, orange);

  // console.log(apple, orange);

  if (fruit.apple > fruit.orange) {
    return `We have more apples than oranges`;
  }

  return `We have ${fruit.apple} apples and ${fruit.orange} oranges`;
}
//

function letters() {}

const groceries = foodProcessor({
  apple: 4,
  watermelon: 5,
});

function marketPlace() {
  console.log(groceries);
}

marketPlace();
