let isEmpty = Symbol.for("isEmpty");

Object.prototype[isEmpty] = {
        for (key in this) {
                return false;
        return true;
        }
        

        // globalSym (Obj) {
        //         let counter = 0;
        //         for (let meth of Obj) {
        //                 counter++;
        //         }
        //         if (counter == 0) {
        //                 return true;
        //         } else {
        //                 return false;
        //         }
        // }
}

let emptyObj = {
        [globalSym] () {
                super.globalSym(this);
        }
};
console.log(emptyObj[Symbol.for("isEmpty")]()); // true

let user = {
        name: "Tom",
        [globalSym] () {
                super.globalSym(this);
        }
};
console.log(user[Symbol.for("isEmpty")]()); // false