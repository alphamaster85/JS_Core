var op;
var minIn;
var maxIn;
var res;
var counter = [0, 0];

var readButton = document.getElementById("readNumbers");
readButton.onclick = function () {
    minIn = random(document.getElementById("min").value, document.getElementById("max").value);
    maxIn = random(document.getElementById("min").value, document.getElementById("max").value);
    op = document.getElementById("opSelect").options[document.getElementById("opSelect").selectedIndex].value;

    document.getElementById("In").value = minIn + " " + op + " " + maxIn + " = ?";
}

var checkButton = document.getElementById("checkResult");
checkButton.onclick = function () {
    res = operation(minIn, maxIn, op);
    document.getElementById("result").value = res;
    console.log(res);

    if (document.getElementById("prognosRes").value == res) {
        var congrats = "ВІРНО";
        counter[0]++;
    } else {
        var congrats = "HE ВІРНО";
        counter[1]++;
    }

    document.getElementById("resCongrats").value = congrats;
    console.log(congrats);
    console.log(counter[0] + " / " + counter[1]);
}

function operation(x, y, op) {
    var result = null;
    switch (op){
        case "+": {
            result = +x + +y;
            break;
        }
        case "-": {
            result = x - y;
            break;
        }
        case "*": {
            result = x * y;
            break;
        }
        case "/": {
            result = x / y;
        } 
    }
    return result;
}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + +min);
}