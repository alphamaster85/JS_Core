var x = 1;
var y = 2;

var res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

var res2 = String(Boolean(x)) + String(y);
console.log(res2);
console.log(typeof res2);

var res3 = Boolean(y-x);
console.log(res3);
console.log(typeof res3);

var res4 = (x/0)/(y/0);
console.log(res4);
console.log(typeof res4);

//alert (res1);