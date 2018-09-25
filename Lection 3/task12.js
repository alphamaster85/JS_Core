var x = 1;
var y = 1;
while (x = y) {
    x = Number (prompt ("Введіть x", 0));
    y = Number (prompt ("Введіть y", 0));
    if (x = y) {
        alert ("Числа не повинні бути однакові");
    }
}

function minMax(x, y) {
    var min;
    x<y ? min=x : min=y;
    return (min);
}

alert ("Менше число - це " + minMax(x, y));