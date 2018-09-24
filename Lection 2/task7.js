var a = 1;
var b = 0;
while (a >= b) {
    a = Number (prompt ("Введіть a", 0));
    b = Number (prompt ("Введіть b", 1));
    if (a >= b) {
        alert ("a повинно бути менше b");
    }
}

var sum = a + b;
for (a++; a!=b; a++) {
    sum += a;
}

alert ("Сума становить " + sum);