function* generateFibonacci() {
        let a = 1;
        yield a;

        let b = 1;
        yield b;

        let c;
        let index = 0;
        while (index < 30) {
                c = a + b;
                a = b;
                b = c;
                yield c;
                index++;
        }
}

let gen = generateFibonacci();
for (let i = 0; i < 30; i++) {
        console.log(gen.next().value);
}
     
//Должна получиться последовательность: 1 1 2 3 5 8 13 21 34 55.