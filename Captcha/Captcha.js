function checkForm(event) {
    event.preventDefault();    
    return true;
}

function getReverseWord(inputWord) {
    let reverseWord = "";
    for (let char of inputWord)
        reverseWord = char + reverseWord;
    return reverseWord;
}

$(document).ready($("#chekButton").on("click", function(event) {
    event.preventDefault();
    if (getReverseWord($("#inputPlain").val()) == $("#inputReverse").val()) {
        $("#result").html("ВІРНО");
        $("#result").removeClass("typeError");
        $("#result").addClass("typeOK");
    } else {
        $("#result").html("НЕ ВІРНО");
        $("#result").removeClass("typeOK");
        $("#result").addClass("typeError");
    }
}));