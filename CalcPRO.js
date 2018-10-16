var op;
var minIn;
var maxIn;
var res;
var smileImg = document.createElement("img");
    smileImg.style.width = "100px";
    smileImg.style.height = "100px";

var inputMin = document.getElementById("min");
inputMin.keyup = function () {
    if (isNaN(document.getElementById("min").value)) {        
        alert("inputMin - не число");
        //document.getElementById("min").preventDefault();
    }
}

// var inputMax = document.getElementById("max");
// inputMax.onchange = function () {
//     if (isNaN(document.getElementById("max").value)) {
//         alert("inputMax - не число");
//     }
// }

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
    let res_true, res_not_true;
    
    if (document.getElementById("prognosRes").value == res) {
        var congrats = "ВІРНО";
        smileImg.setAttribute("src", "smile.jpg");
		smile.appendChild(smileImg);
        setStorage("res_true", "session");
        setStorage("res_true", "local");
    } else {
        var congrats = "HE ВІРНО";
        smileImg.setAttribute("src", "sad.jpg");
		smile.appendChild(smileImg);
        setStorage("res_not_true", "session");
        setStorage("res_not_true", "local");
    }

    document.getElementById("resCongrats").value = congrats;
    console.log(congrats);
    //console.log("Вірних відповідей за сесію: ", sessionStorage.getItem("res_true").value);
    //console.log("Невірних відповідей за сесію: ", sessionStorage.getItem("res_not_true").value);
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

function setStorage (counter, typeStorage) {
    console.log("function>setStorage = ", counter);
    switch (typeStorage) {
        case "session" : {
            console.log("switch>session = ", typeStorage);
            if (sessionStorage.getItem(counter) != undefined) {
                console.log("if>getItem = ", Number(sessionStorage.getItem(counter)));
                sessionStorage.setItem(counter, Number(sessionStorage.getItem(counter)) + 1);
            } else {
                console.log("else>getItem = ", Number(sessionStorage.getItem(counter)));
                sessionStorage.setItem(counter, 1);
            }
        }
        break;
        case "local" : {
            console.log("switch>local = ", typeStorage);
            if (localStorage.getItem(counter) != undefined) {
                localStorage.setItem(counter, Number(localStorage.getItem(counter)) + 1);
            } else {
                localStorage.setItem(counter, 1);
            }
        }
        break;
    }
   
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + +min);
}