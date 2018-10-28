function createPromiseRandom(min, max, delay) {
        return new Promise(function (resolve, reject) {
                setTimeout(function () {
                        
                        if (min < max) {
                                resolve ("Отмена ввода имени");
                        } else {
                                reject (console.log);
                        }
                }, delay);                
        });
}

let p1 = createPromiseRandom(1, 100, 2000);
p1.then(/* Ваш код */);
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(/* Ваш код */);

// Через две секунды, на экране должно появится случайной число от 1 до 100.
// Через три секунды, на экране должна появится информация об ошибке.