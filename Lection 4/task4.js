var k = Number(prompt("Введіть число k", 0));

function digitSum(k) {
    var sum = 0;
    if (k<10) {
        return sum + k;
    } else {
        return sum = k%10 + digitSum(parseInt(k/10));
    }
}

var results = digitSum (k);
console.log (results);