
function checkForm(event) {
    event.preventDefault();
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
    $("<tr><td id='tnum"+newIndex+"'></td><td id='tname"+newIndex+"'></td><td id='tphone"+newIndex+"'></td><td id='tbd"+newIndex+"'></td></tr>").appendTo("#table");
    $("#tname"+newIndex).html(newStudent.name);
    $("#tphone"+newIndex).html(newStudent.phone);
    $("#tbd"+newIndex).html(newStudent.bd);
    $("#tnum"+newIndex).html(newIndex); 
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

$(function(){

    //при кліку ADD додаємо новий запис в таблицю
    $("#add").on("click", function(event) {
        event.preventDefault();

        //перевіряємо чи ведені всі поля перед записом в таблицю
        if (!checkForm(event)) return;

        let expregName = /(^[A-Z]{1}[a-z]{1,}(-[A-Z]{1}[a-z]{1,}){1})$|(^[A-Z]{1}[a-z]{1,}$)/g;
        let expregPhone = /^\+380[0-9]{9}$/g;
        let expregBD = /^((([012]{1}[0-9]{1})|([3]{1}[01]{1}))\.(([0]{1}[1-9]{1})|([1]{1}[012]{1}))\.((19[0-9]{2})|(20[01]{1}[0-9]{1})))$/g;
        // console.log("ExpReg(name)=", expregName.test($("#name").val()), " ExpReg(phone)=", expregPhone.test($("#phone").val()), " ExpReg(bd)=", expregBD.test($("#bd").val()));

        let inputName = expregName.test($("#name").val());
        let inputPhone = expregPhone.test($("#phone").val());
        let inputBD = expregBD.test($("#bd").val());
        console.log("name=", inputName, " phone=", inputPhone, " bd=", inputBD); 

        if (inputName) {$("#name").removeClass("typeError"); $("#errorName").attr("hidden", "");}
            else {$("#name").addClass("typeError"); $("#errorName").removeAttr("hidden");};
            
        if (inputPhone) {$("#phone").removeClass("typeError"); $("#errorPhone").attr("hidden", "");}
            else {$("#phone").addClass("typeError"); $("#errorPhone").removeAttr("hidden");};
                
        if (inputBD) {$("#bd").removeClass("typeError"); $("#errorBD").attr("hidden", "");}
            else {$("#bd").addClass("typeError"); $("#errorBD").removeAttr("hidden");};
        
        if (inputName && inputPhone && inputBD) {
                    
            //створюємо новий об'єкт student
            student[index] = new Student($("#name").val(), $("#phone").val(), $("#bd").val());
            console.log(student);
                        
            //записумо дані в новий рядок таблиці 
            addStudentToTable (student[index], ++index);
                        
            //обнуляємо вміст полів для введення
            $("#name").val("");
            $("#phone").val("");
            $("#bd").val("");
        } 
    });

});