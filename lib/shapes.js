class Shape {
    // Defines a class called Shape which has a constructor initializing 'color' and sets the 'color' value.

    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);
    }
}
// defines a Shape-extending Circle class that renders an SVG Circle with location, size, and fill color dependent on the characteristics of the current instance.
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
}
// defines a Shape-extending Square class that renders an SVG Square with location, size, and fill color dependent on the characteristics of the current instance.
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`;
    }
}
// Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape {
    render() {
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
};

module.exports = { Circle, Square, Triangle }