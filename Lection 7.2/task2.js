let pairwiseConcatination = {
    firstArray: [],
    secondArray: [],

    [Symbol.iterator]() {
        let minLength;
        if (this.firstArray.length < this.secondArray.length) {
            minLength = this.firstArray.length;
        } else {
            minLength = this.secondArray.length;
        }

        let i=0;
        return {
            next: () => {
                if (i < minLength) {
                    return {
                        done: false,
                        value: `[${this.firstArray[i]}, ${this.secondArray[i++]}]`
                    }
                } else {
                    return {
                        done: true
                    }
                }
            } 
        } 
    }
}
 
pairwiseConcatination.firstArray = ["Tom", "Sam", "Ray"];
pairwiseConcatination.secondArray = [22, 26, 24, 20];
 
for (let pair of pairwiseConcatination) {
    console.log(pair);
}