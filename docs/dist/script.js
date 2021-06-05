"use strict";
var Counter = /** @class */ (function () {
    function Counter() {
        var _this = this;
        /**
         * Reset Counter Value
         */
        this.reset = function () {
            _this.count = 0;
            return _this.count;
        };
        /**
         * Increase counter value
         */
        this.increase = function () {
            return ++_this.count;
        };
        /**
         * Decrease counter value
         */
        this.decrease = function () {
            return --_this.count;
        };
        this.count = 0;
    }
    return Counter;
}());
function updateDisplay(callback) {
    var count = document.querySelector("#count");
    count.textContent = callback().toString();
}
window.onload = function () {
    var count = new Counter();
    var decBtn = document.querySelector("#dec-btn");
    var incBtn = document.querySelector("#inc-btn");
    var resetBtn = document.querySelector("#reset-btn");
    decBtn.addEventListener("click", function () { return updateDisplay(count.decrease); });
    incBtn.addEventListener("click", function () { return updateDisplay(count.increase); });
    resetBtn.addEventListener("click", function () { return updateDisplay(count.reset); });
};
