let globalSym = Symbol.for("isEmpty");
Object.__proto__ = {
    globalSym() {
        if ([Symbol.for("isEmpty")]) {
            return false;
        } else {
            return true;
        }
    }
}

let emptyObj = {
    [globalSym]: "isEmpty",
};

console.log(Symbol.for("isEmpty"));

console.log([Symbol.for("isEmpty")]); // true
console.log(emptyObj[Symbol.for("isEmpty")]()); // true

let user = {
   name: "Tom"
};
console.log(user[Symbol.for("isEmpty")]()); // false
