var mapBuilder = function (keysArray, valuesArrays) {
    let mapArray = new Map();
    if (keysArray.length == valuesArrays.length) {
        for (let i=0; i<keysArray.length; i++) {
            mapArray.set(keysArray[i], valuesArrays[i]);
        }
        return mapArray;
    } //else {
        // let srt = "масиви не однакового розміру";
        //return null;
    //}
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"