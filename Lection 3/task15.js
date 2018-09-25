var k = Number (prompt ("Введіть число", 0));
var n = Number (prompt ("Введіть номер цифри", 0));

function digitN(k, n) {
    var res;
    for (var i=1; i<=n; i++) {
        res = k % 10;
        k = parseInt (k/10);
    }
    return(res);
}

var res;
res = digitN(k, n);
alert ("Результат становить " + res);