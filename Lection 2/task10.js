var a = 1;
var b = 0;
while (a >= b) {
    a = Number (prompt ("Введіть a", 0));
    b = Number (prompt ("Введіть b", 1));
    if (a >= b) {
        alert ("a повинно бути менше b");
    }
}

var z = 1;
for (var i=a; i<=b; i++) {
    for (var j=1; j<=z; j++) {
        alert (i);
    }
    z++;
}