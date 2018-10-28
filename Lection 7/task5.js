// Напишите класс Квадрат, определите защищенное свойство для хранения
// значения стороны. Для доступа к этому свойству определите необходимые
// метод/методы. Также определите публичный метод, который возвращает периметр.

class Square {
    constructor(size) {
        if (size != undefined) this.a = size;
            else this.a = 0;
    };
    getSize() {
        return this.a;
    };
    setSize(size) {
        this.a = size;
    };
    perimeter() {
        return this.a * 4;
    };
    info() {
        return `Сторона a = ${this.a}`;
    }
}

let square = new Square(10);
console.log(`Периметр квадрата = ${square.perimeter()}`);

// На основе этого класса создайте класс Куб и переопределите метод получения периметра.
// Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
// 1. Без расширения (полностью переопределить метод родителя);
// 2. С расширением (использовать результат метода родителя для дальнейших расчетов).

class Cube1 extends Square {
    constructor (size) {
        super (size);
    };
    perimeter () {
        return this.a*12;
    };
}

let cube1 = new Cube1;
console.log(`Периметр куба1 = ${cube1.perimeter()}`);
cube1.setSize(10);
console.log(`Периметр куба1 = ${cube1.perimeter()}`);

class Cube2 extends Square {
    constructor (size) {
        super (size);
    };
    perimeter () {
        let p = super.perimeter();
        return p*3;
    };
}

let cube2 = new Cube2(5);
console.log(`Периметр куба2 = ${cube2.perimeter()}`);
cube2.setSize(10);
console.log(`Периметр куба2 = ${cube2.perimeter()}`);