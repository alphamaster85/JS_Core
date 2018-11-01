var minIn;
var maxIn;
var res;
var smileImg = document.createElement("img");
    smileImg.style.width = "100px";
    smileImg.style.height = "100px";

function checkForm1(event) {
    event.preventDefault();
    let inputMin = $("#inputMin").val();
    let inputMax = $("#inputMax").val();
    checkInput(inputMin);
    checkInput(inputMax);

    return true;
}

function checkInput (input) {
    if (!isNaN(input) && input>0) return true
        else return false;
}

var prognosRes = document.getElementById("prognosRes");
prognosRes.onchange = function () {
    if (isNaN(document.getElementById("prognosRes").value)) {
        alert("prognosRes - не число");
    }
}

var readButton = document.getElementById("readNumbers");
readButton.onclick = function () {
    minIn = getRandom($("#inputMin").val(), $("#inputMax").val());
    maxIn = getRandom($("#inputMin").val(), $("#inputMax").val());
    op = document.getElementById("opSelect").options[document.getElementById("opSelect").selectedIndex].value;

    $("#mathOperation").val() = minIn + " " + op + " " + maxIn + " = ?";
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
    console.log("Вірних відповідей за сесію: ", sessionStorage.getItem("res_true"));
    console.log("Невірних відповідей за сесію: ", sessionStorage.getItem("res_not_true"));
    console.log("Вірних відповідей всього: ", localStorage.getItem("res_true"));
    console.log("Невірних відповідей всього: ", localStorage.getItem("res_not_true"));
}

var op;
function operation(x, y, op) {
    let result = null;
    switch (op) {
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

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + +min);
}

function setStorage (counter, typeStorage) {
    switch (typeStorage) {
        case "session" : {
            if (sessionStorage.getItem(counter) != undefined) {
                sessionStorage.setItem(counter, Number(sessionStorage.getItem(counter)) + 1);
            } else {
                sessionStorage.setItem(counter, 1);
            }
        }
        break;
        case "local" : {
            if (localStorage.getItem(counter) != undefined) {
                localStorage.setItem(counter, Number(localStorage.getItem(counter)) + 1);
            } else {
                localStorage.setItem(counter, 1);
            }
        }
        break;
    }   
}