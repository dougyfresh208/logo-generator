const Shape = require('./shape');

class Circle extends Shape {
  render() {
    const radius = 80; // 80 pixels radius will be within the 200px height of the SVG
    const cx = 150; // SVG width center
    const cy = 100; // SVG height center
    return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;