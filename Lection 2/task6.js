var a = 0;
while (a < 1) {
    a = prompt ("Введіть a", 1);
    if (a < 1) {
        alert ("a повинно бути більше 0");
    }
}

var b = 0;
while (a >= 1) {
    b = a % 10;
    alert (b);
    a = parseInt (a / 10);
}