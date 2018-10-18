class Square {
    constructor (size) {
        this.square_size = size;
    };
    get size () {
        return this.square_size;
    };
    set size (size) {
        this.square_size = size;
    };
    perimeter () {
        return this.square_size*4;
    };
}

class Cube extends Square {
    constructor (size) {
        super (size);
    };
    // perimeter () {
    //     return this.square_size*12;
    // };
    perimeter () {
        let p = super.perimeter();
        return p*3;
    };
}