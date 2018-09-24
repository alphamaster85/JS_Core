var a = prompt ("Введіть оцінку", 5);

switch (Number(a)) {
    case 1:
        alert ("плохо");
        break;
    case 2:
        alert ("неудовлетворительно");
        break;
    case 3:
        alert ("удовлетворительно");
        break;
    case 4:
        alert ("хорошо");
        break;
    case 5:
        alert ("отлично");
        break;
    default:
        alert ("ошибка");
}
