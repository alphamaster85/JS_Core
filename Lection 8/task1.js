let isEmpty = Symbol.for("isEmpty");

Object.prototype[isEmpty]() 
{
        for (key of this) {
            return true;
        }            
        return true;
};

let emptyObj = {};
console.log(emptyObj[Symbol.for("isEmpty")]()); // true

let user = {
        name: "Tom",
};
console.log(user[Symbol.for("isEmpty")]()); // false