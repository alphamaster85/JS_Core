let obj = {
    name: "obj",
    print: function () {
        f = () => console.log(obj.name);
        f();
    }
};
 
function multiCaller(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}
 
multiCaller(obj.print, 3);  // "obj", 3 раза