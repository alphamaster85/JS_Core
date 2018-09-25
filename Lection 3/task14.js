var a = Number (prompt ("Введіть число a", 0));
var b = Number (prompt ("Введіть число b", 0));
var op = Number (prompt ("Введіть дію", 0));
var res;

function calc(a, b, op) {
    var res;
    switch (op) {
        case 1:
            res = a - b;
            break;
        case 2:
            res = a * b;
            break;
        case 3:
            res = a / b;
            break;
        default:
            res = a + b;
    }
    return(res);
}

res = calc(a, b, op);
alert ("Результат становить " + res);