// Напишите класс Геометрическая фигура, определите в нем приватные
// свойства для задания центра фигуры. Для доступа к этим свойствам определите
// необходимые метод/методы.

class GeometricFigure {
    constructor(x, y) {
        if (x != undefined) this.x = x;
            else this.x = 0;
        if (y != undefined) this.y = y;
            else this.y = 0;
    };
    getCentrum() {
        return (this.x, this.y);
    };
    setCentrum(x, y) {
        this.x = x;
        this.y = y;
    };
}

// На основе этого класса создайте два новых (наследники) – Прямоугольник и
// Круг. В этих классах определите особые приватные свойства. (Например, длина
// диагонали для Квадрата и радиус для Круга). В каждый из классов добавьте
// публичный метод info(), который выводит на экран всю доступную информацию о
// фигуре.

class Rectangle extends GeometricFigure {
    constructor(x, y, d){
        super(x, y);
        if (d != undefined) this.d = d;
            else this.d = 0;
    };
    info() {
        return `x = ${this.x}
        y = ${this.y}
        d = ${this.d}`
    };
    getDiagonal() {
        return (this.d);
    };
    setDiagonal(d) {
        this.d = d;
    };
}

class Сircle extends GeometricFigure {
    constructor(x, y, r){
        super(x, y);
        if (r != undefined) this.r = r;
            else this.r = 0;
    };
    info() {
        return `x = ${this.x}
        y = ${this.y}
        r = ${this.r}`
    };
    getRadius() {
        return (this.r);
    };
    setRadius(r) {
        this.r = r;
    };
}

let circle = new Сircle;
let rectangle = new Rectangle;

console.log("circle:" + circle.info());
console.log("rectangle:" + rectangle.info());

rectangle.setCentrum(5, 5);
circle.setCentrum(1, 1);
rectangle.setDiagonal(3);
circle.setRadius(7);

console.log("circle:" + circle.info());
console.log("rectangle:" + rectangle.info());

let circle1 = new Сircle(4, 4, 2);
console.log("circle:" + circle1.info());
let rectangle1 = new Rectangle(8, 8, 6);
console.log("rectangle:" + rectangle1.info());