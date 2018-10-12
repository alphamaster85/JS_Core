let obj = {
    name: "obj",
    print: function () {
        obj.print = () => console.log(obj.name);     
    }
};
 
function multiCaller(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}
 
multiCaller(obj.print(), 3);  // "obj", 3 раза