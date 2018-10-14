function format(s, ...v) {
    let resS = [];    
    for (let i=0; i<s.length; i++) {
        resS[s.length-1-i] = s[i];
        // console.log("iter: s[", i, "] = ", s[i], "iter: resS[", s.length-1-i, "] = ", resS[s.length-1-i],);
    }
    // console.log("s.length = ", s.length);
    // console.log("resS.length = ", resS.length);

    let resV = [];
    for (let i=0; i<v.length; i++) {
        resV[v.length-1-i] = v[i];
        // console.log("iter: v[", i, "] = ", v[i], "iter: resV[", v.length-1-i, "] = ", resV[v.length-1-i],);
    }
    // console.log("v.length = ", v.length);
    // console.log("resV.length = ", resV.length);
    
    let res = "";
    for (let i=0; i<s.length; i++) {
        if (resS[i] != undefined) {
            res = res + resS[i];
        }
        if (resV[i] != undefined) {
            res = res + resV[i];
        }
    }
    return res;
}

let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);
 
let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);
 
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);