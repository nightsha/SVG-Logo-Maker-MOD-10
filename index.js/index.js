// export { Triangle, Circle, Square } from './shape.js';

// const triangle = new Triangle();
// const circle = new Circle();
// const square = new Square();

// Further code to use these shapes as needed in your application


import { Triangle, Circle, Square } from './shape.js';

const myTriangle = new Triangle(0, 0, 5, 4);
const myCircle = new Circle(2, 3, 6);
const mySquare = new Square(1, 1, 7);

const triangleArea = myTriangle.calculateArea(); // Call the specific method for Triangle
const circleArea = myCircle.calculateArea();   // Call the specific method for Circle
const squareArea = mySquare.calculateArea();   // Call the specific method for Square

console.log(triangleArea);
console.log(circleArea)
console.log(squareArea)