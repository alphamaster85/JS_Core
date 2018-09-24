    

    //    var a;
    //    var s;
    //    a = prompt ("Введіть сторону квадрата", 0);
    //    
    //    if (a > 0) { 
    //        s = a*a;
    //        alert ("Площа кватрата зі стороною " + a + " становить "+ s);
    //    } else {
    //         alert ("Потрібно ввести число більше нуля");
    //    }
   
    var num;
    num = prompt ("Введіть двознaчне число", 0);
        
    if ((num >= 10) && (num < 100)) { 
        var des;
        des = parseInt(num/10);
        alert ("Перша цифра = " + des);
        var odn;
        odn = parseInt(num%10)
        alert ("Друга цифра = " + odn);
    } else {
        alert ("Потрібно ввести число більше нуля і менше 100");
    }