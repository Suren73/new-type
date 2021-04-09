"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
        this.result = 0;
        this.totalAmaunt = 0;
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.sum = function () {
        return this.result = this._items.reduce(function (sum, current) {
            return sum + current.price;
        }, 0);
    };
    Cart.prototype.totalSum = function (bonus) {
        if (bonus > 0) {
            return this.totalAmaunt = this.sum() - Math.ceil(this.sum() * bonus / 100);
        }
        else {
            throw new Error('Бонус должен быть больше нуля');
        }
    };
    Cart.prototype.delItem = function (id) {
        var count = this._items.findIndex(function (el) { return el.id === id; });
        if (count > -1) {
            this._items.splice(count, 1);
        }
        else {
            throw new Error('Индекс ненайден');
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map