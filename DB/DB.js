$(function(){

    //зберігаємо значення з поляв для введення у глобальні змінні
    function checkForm(event) {
        event.preventDefault();
        
        let expregName = /(^[A-Z]{1}[a-z]{1,}(-[A-Z]{1}[a-z]{1,}){1,})|(^[A-Z]{1}[a-z]{1,}$)/g;
        let nameTest = expregName.test($("#name").val());
        if (nameTest) f_name = $("#name").val(); else f_name = "Error";
        console.log("name = " + f_name);

        let expregPhone = /^\+380[0-9]{9}$/g;
        let phoneTest = expregPhone.test($("#phone").val());
        if (phoneTest) f_phone = $("#phone").val(); else f_phone = "Error";
        console.log("name = " + f_phone);

        let expregBD = /^((([012]{1}[0-9]{1})|([3]{1}[01]{1}))\.(([0]{1}[1-9]{1})|([1]{1}[012]{1}))\.((19[0-9]{2})|(20[01]{1}[0-9]{1})))$/g;
        let bdTest = expregBD.test($("#phone").val());
        if (bdTest) f_bd = $("#phone").val(); else f_bd = "Error";
        console.log("name = " + f_bd);

        return true;
    }

    class Student {
        constructor(name, phone, bd) {
            this.name = name;
            this.phone = phone;
            this.bd = bd;
        }
    }

    function addStudentToTable(newStudent, newIndex) {
        $("<tr><td id='tnum'></td><td id='tname'></td><td id='tphone'></td><td id='tbd'></td></tr>").appendTo("#table");
        $("tr #tname").last().html(newStudent.name);
        $("tr #tphone").last().html(newStudent.phone);
        $("tr #tbd").last().html(newStudent.bd);
        $("tr #tnum").last().html(newIndex); 
    }

    //створюємо перші три записи нашої бази даних
    var student = []; var index = 0;
    student[index] = new Student("Andrew", "+380954841712", "14.12.1985");
    student[index+1] = new Student("Dana", "+380503742818", "31.01.2012");
    student[index+2] = new Student("Sandra", "+380507172225", "25.08.2016");

    //додаємо перші три записи в таблицю
    for (index; index<student.length; index++) {
        $("<tr><td id='tnum'></td><td id='tname'></td><td id='tphone'></td><td id='tbd'></td></tr>").appendTo("#table");
        $("tr #tnum").last().html(index+1);
        $("tr #tname").last().html(student[index].name);
        $("tr #tphone").last().html(student[index].phone);
        $("tr #tbd").last().html(student[index].bd);
    }

    //при кліку ADD додаємо новий запис в таблицю
    $("#add").on("click", function(event) {
        event.preventDefault();

        //перевіряємо чи ведені всі поля перед записом в таблицю
        if ($("#name").val() == "" || $("#phone").val() == "" || $("#bd").val() == "") return;

        //створюємо новий об'єкт student
        student[index] = new Student($("#name").val(), $("#phone").val(), $("#bd").val());
        console.log(student);

        //записумо дані в новий рядок таблиці 
        addStudentToTable (student[index], ++index);

        //обнуляємо вміст полів для введення
        $("#name").val("");
        $("#phone").val("");
        $("#bd").val("");
    });

});