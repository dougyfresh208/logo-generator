const Shape = require('./shape');

class Circle extends Shape {
  constructor(color) {
    super(color); // Call the parent class constructor with the color parameter
  }

  render() {
    // Override render method or add additional Circle-specific methods
    return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
  }
}

module.exports = { Circle };