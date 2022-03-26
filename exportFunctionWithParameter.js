// function declaration
function square(num) {
  return num * num;
}
module.exports = square;


// function expression
let square = function (number) {
  return number * number;
};
module.exports = square;


// arrow function
const square = (num) => {
  return num * num;
};

module.exports = square;
