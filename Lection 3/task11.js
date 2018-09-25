var x = 1;
var n = 1;
var s = 0;
x = Number (prompt ("Введіть x", 1));
n = Number (prompt ("Введіть n", 1));

function stepin(x, n) {
    var res = 1;
    for (var i=1; i<=n; i++) {
        res=res*x;
    }
    return (res);
}

s = stepin(x, n);
alert ("число " + x + " в степіні " + n + " дорівнює " + s);