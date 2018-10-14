let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "");
    }
    // convertToString: function (callback) {
    //     callback((function () {
    //         return this.data + "";
    //     }).bind(this));
    // }
};
 
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
 
    notification: function () {
        return ((callback) => this.result = callback());
    }
    // notification: function () {
    //     return (function (callback) {
    //         this.result = callback();
    //     }).bind(this);
    // }
};
 
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"