const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// Require the shape modules from the lib directory
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// Function to prompt user for input
async function getUserInput() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 && input.length > 0,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
      validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/i.test(input),
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
      validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/i.test(input),
    },
  ]);

  return answers;
}

// Function to create SVG content
function createSVG(text, textColor, shapeType, shapeColor) {
  let shape;
  switch (shapeType) {
    case 'circle':
      shape = new Circle(shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(shapeColor);
      break;
    case 'square':
      shape = new Square(shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }

 // Adjust the coordinates for the text to center it at (150, 100)
  // The font-size and y-coordinate are adjusted for vertical centering
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="100" fill="${textColor}" font-family="Verdana" font-size="35" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;
  
  const outputPath = './examples/logo.svg';

  
  // Ensure the /examples directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

  fs.writeFileSync('./examples/logo.svg', svgContent);
}

// Main function to run the application
async function main() {
  const userInput = await getUserInput();
  const { text, textColor, shape, shapeColor } = userInput;
  createSVG(text, textColor, shape, shapeColor);
  console.log('Generated logo.svg');
}

main();