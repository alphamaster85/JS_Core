// Возьмите генератор из Задание №1. Генераторы
// и добавьте возможность указывать тип следующего значения: number или string. 
// По умолчанию – number.
// Пример использования генератора:

function* generateFibonacci(type) {
    let a = 1;
    let input = yield a;

    let b = 1;
    if (input == "string") input = yield b+"";
        else input = yield b;

    let c;
    let index = 0;
    while (index < 30) {
            c = a + b;
            a = b;
            b = c;
            index++;
            if (input == "string") input = yield c+"";
                else input = yield c;
    };
};

let gen = generateFibonacci();
console.log(gen.next().value); // 1
console.log(gen.next("string").value); // "1"
console.log(gen.next("number").value); // 2
console.log(gen.next().value); // 3
console.log(gen.next("string").value); // "5"