function getSandP () {
    var a = prompt("Введіть сторону а", 1);
    var b = prompt("Введіть сторону b", 1); 

    var array = [];
    var x=undefined;
    var y=undefined;

    array[0] = function () {
        if ((a>0) && (a!=isNaN)) {
            x=a;
        }
        if ((b>0) && (b!=isNaN)) {
            y=b;
        }
    };

    array[1] = function () {
        return x*2+y*2;
    }

    array [2] = function () {
        return x*y;
    }

    return array;
 }

var SandP = getSandP ();
SandP[0]();
console.log ("Периметр = " + SandP[1]());
console.log ("Площа = " + SandP[2]());