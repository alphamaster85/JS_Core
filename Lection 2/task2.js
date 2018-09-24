var a = prompt ("Введіть число", 0);

var res="";

if (a>0) {
    res+="положительное ";}
    else if (a<0) {
        res+="отрицательное ";
    } else {
        res+="нулевое число";
    }
if (a%2==1) {
    res+="нечетное число";    
} else if (a!=0) {
    res+="четное число";;
}

alert(res);
console.log (res);