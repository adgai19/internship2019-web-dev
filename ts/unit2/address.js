"use strict";
exports.__esModule = true;
var Address = /** @class */ (function () {
    function Address(state, country) {
        this.state = state;
        this.country = country;
    }
    Address.prototype.getAddress = function () {
        return this.state + " " + this.country;
    };
    return Address;
}());
exports.Address = Address;
