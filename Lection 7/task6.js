// Напишите класс Круг и реализуйте следующий функционал:
// 1. Определите конструктор, который запрашивает координаты центра круга, его радиус и инициализирует объект;
// 2. Определите метод получения длины окружности для текущего объекта (L = 2 * π * R);
// 3. Определите статический метод, который принимает радиус и возвращает длину окружности для заданного радиуса (L = 2 * π * R);
// 4. Определите метод получения объекта-круга, который возвращает копию текущего объекта;
// 5. Определите статический метод, который принимает координаты центра круг, его радиус и возвращает объект круга с заданными параметрами;
// 6. Определите метод проверки попадания точки в круг;
// 7. Определите метод преобразования текущего состояния объекта в символьную строку (toString()).

const PI = 3.14;
class Сircle {
    constructor(x, y, R) {
        if (x == undefined) this.x = prompt('Введіть координату x центру круга: ', 0);
            else this.x = x;
        if (y == undefined) this.y = prompt('Введіть координату y центру круга: ', 0);
            else this.y = y;
        if (R == undefined) this.R = prompt('Введіть радіус круга R: ', 1);
            else this.R = R;
    };
    getCentrum() {
        return (this.x, this.y);
    };
    setCentrum(x, y) {
        if (x == undefined) this.x = prompt('Введіть координату x центру круга: ', 5);
            else this.x = x;
        if (y == undefined) this.y = prompt('Введіть координату y центру круга: ', 5);
            else this.y = y;
    };
    getRadius() {
        return this.R;
    };
    setRadius(R) {
        if (R == undefined) this.R = prompt('Введіть радіус круга R: ', 10);
            else this.R = R;
    };
    circleLength() {
        return 2 * PI * this.R;
    };
    static circleLengthStatic(R) {
        return 2 * PI * R;
    };
    copyСircle() {
        return new Сircle (this.x, this.y, this.R);
    };
    static copyСircleStatic(x, y, R) {       
        return new Сircle (x, y, R);
    };
    info() {
        return `x = ${this.x}
        y = ${this.y}
        R = ${this.R}`
    };
    isPointInCircle(point) {        
        return this.R*this.R >= (point.x-this.x)*(point.x-this.x) + (point.y-this.y)*(point.y-this.y);
    };
    toString() {
        return `x = ${this.x}, y = ${this.y}, Radius = ${this.R}, circleLength = ${this.circleLength()}`;
    }
}

let circle1 = new Сircle();
console.log("circle1:" + circle1.info());

let x=5, y=5, R=10;
let circle2 = new Сircle(x, y, R);
console.log("circle2:" + circle2.info());

circle1.setCentrum();
console.log("circle1:" + circle1.info());
circle2.setRadius(7);
console.log("circle2:" + circle2.info());

let length1 = circle1.circleLength();
console.log("Довжина circle1: " + length1);
let length2 = circle2.circleLength();
console.log("Довжина circle2: " + length2);

let lengthStatic = Сircle.circleLengthStatic(5);
console.log("Довжина lengthStatic = " + lengthStatic);

let circle3 = circle1.copyСircle();
console.log("circle3:" + circle3.info());

let circle4 = Сircle.copyСircleStatic(4, 2, 5.5)
console.log("circle4:" + circle4.info());

let point = {
    x: 4,
    y: 5
}
console.log(`Точка (${point.x},${point.y}) подадає в круг - ${circle4.isPointInCircle(point)}`)

console.log("Статус circle4: ", circle4.toString());