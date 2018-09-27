function format(data, type) {
    switch (type) {
        case "number":
        format = function () {
            return +data; 
        };
        break;
        case "string":
        format = function () {
            return data+""; 
        };
        break;
        case "boolean":
        format = function () {
            return !!data; 
        };
        break;
        default:
        format = null;
    }
}

var originFormat = format;
 
originFormat("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"
 
originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"