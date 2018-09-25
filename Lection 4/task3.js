function createArrayIterator(array) {
    for (var i=0; i<array.length; i++) {
        console.log (array[i]);
    }
}
    
var arr = [5, 3, 7, 9];
var itr = createArrayIterator(arr);