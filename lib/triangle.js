const Shape = require('./shape');

class Triangle extends Shape {
  constructor(color, size = 100) {
    super(color);
    this.size = size; // Size can determine the overall dimensions of the triangle
  }

  render() {
    // SVG for an equilateral triangle
    // The points are calculated for simplicity. Adjust as necessary for your requirements.
    const height = this.size * (Math.sqrt(3)/2);
    return `<polygon points="${50},${50 + (height / 2)} ${50 - (this.size / 2)},${50 - (height / 2)} ${50 + (this.size / 2)},${50 - (height / 2)}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle };