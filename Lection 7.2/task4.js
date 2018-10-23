var sortDistinct = function (array) {
    let arraySort = array.sort();
    
    let arrSet = new Set();
    for (let arr of arraySort) {
        arrSet.add(arr);        
    }

    let arraySet = [];
    let i=0;
    for (let arr of arrSet) {
        arraySet.push(arr);
    }

    return arraySet;
}

let arr1 = sortDistinct([3, 1, 1, 2, 3, 1, 2]);
console.log(arr1); // [1, 2, 3]

let arr2 = sortDistinct([1, 1, 1, 1,]);
console.log(arr2); // [1]