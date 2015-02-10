function add() {
    return this.num1 + this.num2;
}

function sub() {
    return this.num1 - this.num2;
}

function prod() {
    return this.num1 * this.num2;
}

function OtherCalculator() {
    'use strict'

    var array = arguments;
    var nums;

    var obj = {
        set: function(dictnums) {
            nums = dictnums;
        },
        result: function () {
            var result = [];
            for (var i=0; i<array.length; i++) {
                result.push(array[i].call(nums));
            }
            return result;
        }
    }
    return obj;
}
