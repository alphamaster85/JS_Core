// Напишите функцию createPromiseRandom(min, max, delay), которая возвращает promise, который:
// ·        переходит в состояние fulfilled, если min меньше max и генерирует случайное число через delay 
//          миллисекунд в диапазоне от min до max;
// ·        переходит в состояние rejected, если min больше max и возвращает объект ошибки.
// Для генерации случайных чисел можно использовать метод Math.random().
// Примеры использования функции:


// function createPromiseRandom(min, max, delay) {
//         return new Promise(function (resolve, reject) {
//                 setTimeout(function () {
//                         if (min < max) {
//                                 resolve (Math.random()*(max-min)+min);
//                         } else {
//                                 reject(new Error(`Помилка: min= ${min} не може бути більше за max= ${max}`));
//                         }
//                 }, delay);                
//         });
// }

// let p1 = createPromiseRandom(1, 100, 2000);
// p1.then(function (result) {console.log(result)}, function (error) {console.log(error)});
// let p2 = createPromiseRandom(1000, 100, 3000);
// p2.then(function (result) {console.log(result)}, function (error) {console.log(error)});

// Через две секунды, на экране должно появится случайной число от 1 до 100.
// Через три секунды, на экране должна появится информация об ошибке.

// Напишите функцию createPromiseRandom(min, max, delay), которая возвращает promise, который:

// ·        переходит в состояние fulfilled, если min меньше max и генерирует случайное число через delay миллисекунд в диапазоне от min до max;

// ·        переходит в состояние rejected, если min больше max и возвращает объект ошибки.

// Для генерации случайных чисел можно использовать метод Math.random().

// Примеры использования функции:

function createPromiseRandom(min, max, delay) {
        return new Promise(function (resolve, reject) {
           if(min<max){
               setTimeout(function(){
                 resolve (Math.random()*(max-min)+min);
               },delay);
           } else {
             setTimeout(function(){
                 reject (`${min}(min) > ${max}(max) , спробуйте знову`);
             },delay);
           }
        });
     }
     
     let p1 = createPromiseRandom(1, 100, 2000);
     p1.then(function(result){
         console.log(result);
     });
     let p2 = createPromiseRandom(1000, 100, 3000);
     p2.then(null, function(error){
         console.log(error);
     });