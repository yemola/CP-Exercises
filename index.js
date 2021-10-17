let greeting = "Hello";


  let result = Array.from(greeting);
  let turned = result.reverse;
  console.log(turned);
  


// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
if('radius' in Circle) console.log('yes');
const box = {length:2, breadth:3};
const board = Object.assign({depth:5}, box);
console.log(board);
const another = {...board};
console.log(another);

const address = {
  street: 'victor',
  city: 'benin',
  zipCode: 301111,
};

function showAddress(address) {
  for(let key in address)
    console.log(key, address[key]);
}
showAddress(address);