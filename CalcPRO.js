var op;
var minIn;
var maxIn;
var res;
var counter = [0, 0];
var smileImg = document.createElement("img");
    smileImg.style.width = "100px";
    smileImg.style.height = "100px";

var inputMin = document.getElementById("min");
inputMin.onchange = function () {
    if (isNaN(document.getElementById("min").value)) {        
        alert("inputMin - не число");
        document.getElementById("min").preventDefault();
    }
}

var inputMax = document.getElementById("max");
inputMax.onchange = function () {
    if (isNaN(document.getElementById("max").value)) {
        alert("inputMax - не число");
    }
}

var prognosRes = document.getElementById("prognosRes");
prognosRes.onchange = function () {
    if (isNaN(document.getElementById("prognosRes").value)) {
        alert("prognosRes - не число");
    }
}

var readButton = document.getElementById("readNumbers");
readButton.onclick = function () {
    minIn = random(document.getElementById("min").value, document.getElementById("max").value);
    maxIn = random(document.getElementById("min").value, document.getElementById("max").value);
    op = document.getElementById("opSelect").options[document.getElementById("opSelect").selectedIndex].value;

    document.getElementById("expression").value = minIn + " " + op + " " + maxIn + " = ?";
}

var checkButton = document.getElementById("checkResult");
checkButton.onclick = function () {
    res = operation(minIn, maxIn, op);
    document.getElementById("result").value = res;
    console.log(res);
    var smile = document.getElementById("smile");
    
    if (document.getElementById("prognosRes").value == res) {
        var congrats = "ВІРНО";
        smileImg.setAttribute("src", "smile.jpg");
		smile.appendChild(smileImg);
        counter[0]++;
        // sessionStorage.setItem('counterV', 1);
        // console.log(sessionStorage.getItem("counterV").value);
    } else {
        var congrats = "HE ВІРНО";
        smileImg.setAttribute("src", "sad.jpg");
		smile.appendChild(smileImg);
        counter[1]++;
        // sessionStorage.setItem("counterN", window.sessionStorage.getItem("counterN").value+1);
    }

    document.getElementById("resCongrats").value = congrats;
    console.log(congrats);
    console.log(counter[0] + " --- " + counter[1]);
    // console.log("Вірних відповідей за сесію: ", sessionStorage.getItem("counterV").value);
    // console.log("Невірних відповідей за сесію: ", window.sessionStorage.getItem("counterN").value);
}

function operation(x, y, op) {
    let result = null;
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

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + +min);
}