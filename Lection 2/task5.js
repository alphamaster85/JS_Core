var a = prompt ("Введіть додатнє число", 0);
        
if ((a<1000 && a>=100) && a%2==1) { 
    alert ("Так дійсно число " + a + " трьохзначне і непарне");
} else {
    alert ("Число не таке");
}