const Shape = require('./shape');

class Square extends Shape {
  constructor(color, sideLength = 100) {
    super(color);
    this.sideLength = sideLength; // Assuming a square, so only one side length is needed
  }

  render() {
    // SVG for a square with the top-left corner at (50, 50)
    return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}

module.exports = { Square };