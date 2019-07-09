var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        console.log("in parent");
    }
    person.prototype.greet = function () {
        console.log("hi");
    };
    return person;
}());
var programmer = /** @class */ (function (_super) {
    __extends(programmer, _super);
    function programmer(fname, lname) {
        var _this = _super.call(this, fname, lname) || this;
        console.log("in child");
        return _this;
    }
    programmer.prototype.greet = function () {
        console.log("hello world");
    };
    programmer.prototype.greet2 = function () {
        _super.prototype.greet.call(this);
    };
    return programmer;
}(person));
var me = new programmer("myname", "name");
console.log(me);
me.greet();
me.greet2();
