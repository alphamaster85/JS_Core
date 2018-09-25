var a = 0;
var b = 1;

while (a<b) {
    a = prompt ("Введіть a", 1);
    b = prompt ("Введіть b", 0);
    if (a<b) {
        alert ("a повинно бути більше b");
    }
}

while (a>=b) {
    a = a-b;
}

alert (a);