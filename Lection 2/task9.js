var array = [];
var sum = 0;

for (var i=0; i>=0; i++) {
    var j = i+1;
    array[i] = prompt ("Введіть " + j + "-ий елемент масиву", 1);
    if ((!array[i]) || (array[i] == " ") || (isNaN(array[i]))) {
        break;
    } else {
        sum += Number (array[i]);
    }
}

alert ("Сума елементів масиву становить " + sum);