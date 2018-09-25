var array = [];
var num;

for (var i=0; i<=3; i++) {
    array[i]=prompt("Enter number " + i);
}

if (array[0]==array[1]){
    if (array[1]==array[2]){
        num = 3;
    } else {
        num = 2;
    }
} else if (array[1]==array[2]){
    num = 0;
} else {
    num = 1;
}

alert("Is it number "+ array[num]);