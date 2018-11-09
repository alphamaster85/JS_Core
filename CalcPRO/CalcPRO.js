var generateMin;
var generateMax;
var result;
var operation;

function checkForm1(event) {
    event.preventDefault();
    return true;
}

function checkForm2(event) {
    event.preventDefault();
    return true;
}

$(function(){

    $("#buttonREAD").on("click", function(event) {
        event.preventDefault();

        let inputMin = $("#inputMin").val();
        let inputMax = $("#inputMax").val();

        if (checkInput(inputMin)) {
            $("#inputMin").removeClass("typeError");
            $("#error").attr("hidden", "");
            $("#error").html("");
        } else {
            $("#inputMin").addClass("typeError");
            $("#error").removeAttr("hidden");
            $("#error").html("В поля повинні бути введені додатні числа");
            return;
        }

        if (checkInput(inputMax)) {
            $("#inputMax").removeClass("typeError");
            $("#error").attr("hidden", "");
            $("#error").html("");
        } else {
            $("#inputMax").addClass("typeError");
            $("#error").removeAttr("hidden");
            $("#error").html("В поля повинні бути введені додатні числа");
            return;
        }

        if (inputMin < inputMax) {
            $("#error").attr("hidden", "");
            $("#error").html("");

            generateMin = getRandom(inputMin, inputMax);
            generateMax = getRandom(inputMin, inputMax);
            operation = document.getElementById("getOperation").options[document.getElementById("getOperation").selectedIndex].value;
            $("#mathOperation").html(generateMin+" "+operation+" "+generateMax+" = ?");

            $("#buttonCHECK").removeAttr("disabled");
        } else {
            $("#error").removeAttr("hidden");
            $("#error").html("В першому полі число повинно бути меншим за число з другого");
            return;
        }
    }); 

    $("#buttonCHECK").on("click", function(event) {
        event.preventDefault();

        result = mathOperation(generateMin, generateMax, operation);
        
        if ($("#predictedResult").val() == result) {
            $("#resultMessage").html(`Так вірно! Результат становить ${result}. Вітаємо`);
            $("#resultMessage").addClass("typeOK");
            $("#resultMessage").removeClass("typeWrong");
            
            $("#smile").removeClass("imgnone");
            $("#smile").attr("src", "smile.jpg");
            setStorage("result_true", "session");
            setStorage("result_true", "local");

            $("#buttonCHECK").attr("disabled", "disabled");
            $("#inputMin").val("");
            $("#inputMax").val("");
        } else {
            $("#resultMessage").html(`Не вірно! Результат становить ${result}. Нажаль`);
            $("#resultMessage").addClass("typeWrong");
            $("#resultMessage").removeClass("typeOK");
            
            $("#smile").removeClass("imgnone");
            $("#smile").attr("src", "sad.jpg");
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