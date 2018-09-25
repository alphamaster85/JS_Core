var a = 0;
while (a < 1) {
    a = Number (prompt ("Введіть a", 1));
    if (a < 1) {
        alert ("a повинно бути більше 0");
    }
}

var sum = 1;
for (var i=1; i<=a; i++) {
    sum = sum * i;
}

alert (a + "! = " + sum);