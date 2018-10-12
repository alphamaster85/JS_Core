function mul(...param) {
    let result = 0;
    for (let i=0; i < param.length; i++) {
        param[i] = +param[i];
        if (param[i] != isNaN) {
            result += param[i];
            console.log(result);
        }
    }
    return (result);
}
 
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0