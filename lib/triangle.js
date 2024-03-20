const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    // Triangle should be centered and fit within the SVG canvas
    // These points create an equilateral triangle centered at (150, 100)
    return `<polygon points="150,20 230,180 70,180" fill="${this.color}" />`;
  }
}

module.exports = Triangle;