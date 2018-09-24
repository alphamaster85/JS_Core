var a = prompt ("Введіть число", 0);

if (a>0) {
    a++;
} else if (a<0) {
    a-=2;
} else {
    a=10;
}

console.log (a);