let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y,, ...z] = arr;

console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]