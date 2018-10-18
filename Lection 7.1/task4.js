class GeometricFigure {
    constructor (figure) {
        this.GeometricFigure = figure;
    };
    get GeometricFigure () {
        return this.GeometricFigure;
    };
    set GeometricFigure (figure) {
        this.GeometricFigure = figure;
    };
    centrumFigure = [x, y];
    
}

class Rectangle extends GeometricFigure {
    constructor (figure) {
        super (figure);
    };
    diagonal (a, b) {
        return Math.sqrt(a*a+b*b);
    };
    info() {
        for (let i=0; i<Rectangle.length; i++)
            console.log(Rectangle[0]);
    }
}

const PI = 3.14;
class Сircle extends GeometricFigure {
    constructor (figure) {
        super (figure);
    };
    radius (d) {
        return d/2*PI;
    };
    info() {
        for (let i=0; i<Сircle.length; i++)
            console.log(Сircle[0]);
    }
}