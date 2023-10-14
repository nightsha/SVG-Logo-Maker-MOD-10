// Jest tests for shapes

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// code copied from chatai
// Mock the HTML5 canvas rendering context
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
jest.spyOn(canvas, 'getContext').mockReturnValue(context);
document.body.appendChild(canvas);

// code copied from chatai
import { Circle } from './shape.js';

describe('Shape Rendering', () => {
  it('renders a circle with a specified color', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    document.body.appendChild(canvas);

    const myCircle = new Circle(50, 50, 30);
    myCircle.color = 'red';

    // Render the circle on the canvas
    myCircle.render(context);

    // Perform assertions to check if the shape is rendered as expected
    const pixelData = context.getImageData(50, 50, 1, 1).data;
    expect(pixelData[0]).toBe(255); // Red color
  });
});


