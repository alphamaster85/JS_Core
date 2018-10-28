// Создайте следующую асинхронную цепочку promise:

new Promise(function (resolve, reject) {
    // Запрашиваем у пользователя число number при помощи prompt()
    // Если пользователь ввел не число - вызвать reject()
    // Если пользователь ввел число - вызвать resolve(number)
    
    let number = prompt("Enter number: ", 0);
    if (isNaN(number)) {
        reject(new Error(alert(`${number} - не число`)));
    } else {
        resolve(number);
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        // Запрашиваем у пользователя число number, пока он его не введет
        // После ввода числа - вызвать resolve(number)
        
        let number;
        do {
            number = prompt("Enter any number: ", 0);
        } while (isNaN(number));
        resolve(number);
    });
}).then(function (result) {
    // Вывод number на экран
    
    alert(`Число = ${result}`);
});
 
