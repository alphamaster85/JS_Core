function format(s, ...v) {
    let res = s.lenght;
    // for (let i=s.lenght; i >= 0; i--) {
    //     res += s[i]+v[i];
    // }
    return res;
}

let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);
 
let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);
 
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);