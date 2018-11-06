var generateMin;
var generateMax;
var result;
var operation;
var smileImg = document.createElement("img");
    smileImg.style.width = "100px";
    smileImg.style.height = "100px";

$(function(){

    function checkForm1(event) {
        event.preventDefault();
        checkInput($("#inputMin").val());
        checkInput($("#inputMax").val());
        return true;
    }

    $("#buttonREAD").on("click", function(event) {
        event.preventDefault();

        generateMin = getRandom($("#inputMin").val(), $("#inputMax").val());
        generateMax = getRandom($("#inputMin").val(), $("#inputMax").val());
        operation = document.getElementById("getOperation").options[document.getElementById("getOperation").selectedIndex].value;

        if ($("#inputMin").val() < $("#inputMax").val()) {

            if (checkInput(generateMin)) {
                
                if (checkInput(generateMax)) {
                    
                    $("#mathOperation").html(generateMin+" "+operation+" "+generateMax+" = ?");
                } else return;
            } else return;
        } else return;
    });
 
    function checkForm1(event) {
        checkInput($("#predictedResult").val());
        return true;
    }

    $("#buttonCHECK").on("click", function(event) {
        event.preventDefault();

        result = mathOperation(generateMin, generateMax, operation);
        
        if ($("#predictedResult").val() == result) {
            $("#resultMessage").html(`Так вірно! Результат становить ${result}. Вітаємо`);
            
            $("#smile").removeClass("imgnone");
            $("#smile").removeClass("sad");
            $("#result").addClass("smile");
            setStorage("result_true", "session");
            setStorage("result_true", "local");
        } else {
            $("#resultMessage").html(`Не вірно! Результат становить ${result}. Нажаль`);
            
            $("#smile").removeClass("imgnone");
            $("#smile").removeClass("smile");
            $("#result").addClass("sad");
            setStorage("result_wrong", "session");
            setStorage("result_wrong", "local");
        }

        console.log("Вірних відповідей за сесію: ", sessionStorage.getItem("result_true"));
        console.log("Невірних відповідей за сесію: ", sessionStorage.getItem("result_wrong"));
        console.log("Вірних відповідей всього: ", localStorage.getItem("result_true"));
        console.log("Невірних відповідей всього: ", localStorage.getItem("result_wrong"));
    });
});

function checkInput (input) {
    if (!isNaN(input) && input>0) return true
        else return false;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + +min);
}

function mathOperation(x, y, operation) {
    let result = null;
    switch (operation) {
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