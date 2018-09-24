var x = Number (prompt ("Введіть x", 0));

function sign(x) {
    var res = 0;
    if (x<0) {
        res = -1;
    } else if (x>0) {
        res = 1;
    }
    return(res);
}

alert ("Значення становить " + sign(x));