const Shape = require('./shape');

class Square extends Shape {
  render() {
    // Square should be centered and fit within the SVG canvas
    // The square is aligned to be centered at (150, 100)
    const size = 100; // Adjust size as needed
    const x = (300 - size) / 2;
    const y = (200 - size) / 2;
    return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />`;
  }
}

module.exports = Square;