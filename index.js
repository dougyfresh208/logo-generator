// Dynamically import the ES Module 'inquirer'
import('inquirer').then(inquirerModule => {
    const fs = require('fs');
    const path = require('path');
    const { Circle } = require('./lib/circle'); // Adjust according to your actual file structure
    const { Triangle } = require('./lib/triangle'); // Adjust according to your actual file structure
    const { Square } = require('./lib/square'); // Adjust according to your actual file structure
  
    // Adjust the reference to inquirer's prompt method
    const inquirer = inquirerModule.default;
  
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
  
      const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="100" fill="${textColor}" font-family="Verdana" font-size="35" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>
      `;
  
      const outputPath = path.join(__dirname, 'examples', 'logo.svg');
      fs.writeFileSync(outputPath, svgContent);
      console.log('Generated logo.svg');
    }
  
    // Main function to run the application
    async function main() {
      const userInput = await getUserInput();
      const { text, textColor, shape, shapeColor } = userInput;
      createSVG(text, textColor, shape, shapeColor);
      console.log('Generated logo.svg');
    }
  
    main();
  }).catch(error => console.error('Failed to import inquirer:', error));