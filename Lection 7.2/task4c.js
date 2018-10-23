var sortDistinct = function (array) {
    let result=[array[0]];

    //ПЕРЕРОБИТИ ЧЕРЕЗ FOR [I]
    for (let i=0; i<array.length; i++) {
        let j=0;
        while (j<result.length) {
            if (array[i] == result[j]){
                j++;
                break;
            }
            else if (array[i] < result[j]) {
                for (let k=result.length-1; k >= j; k--) {
                    result[k+1] = result[k];
                }
                result[j]=array[i];
                //console.log("i=",i, " j=",j, "res=", result);
                j++;
                break;            
            }
            else if (array[i] > result[j] && j == result.length-1){
                result[j+1] = array[i];
                j++;
                break;
            }
            //result[j+1]=array[i];
            j++;
        }      
    }

    return result;
}

let arr1 = sortDistinct([3, 1, 1, 2, 3, 1, 2]);
console.log([3, 1, 1, 2, 3, 1, 2], " => ",  arr1);; // [1, 2, 3]

let arr2 = sortDistinct([1, 1, 1, 1,]);
console.log([1, 1, 1, 1,], " => ", arr2); // [1]