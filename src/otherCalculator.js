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

    var obj = {
        set: function(dict) {
            for(var key in dict) {
                this[key] = dict[key];
            }
        },
        result: function () {
            var result = [];
            for (var i=0; i<array.length; i++) {
                result.push(array[i].bind(this)());
            }
            return result;
        }
    }
    return obj;
}
