var concatenator04 = function(initialValue){
    'use strict'
    var concatValue = initialValue;

    var concatAdd = function(value){
        concatValue += value;
    }

    var concatSub = function(value){
        concatValue = concatValue - value;
    }

    var obj = {
        value: function(){
            return concatValue;
        },
        add: function(value){
            concatAdd(value);
            return obj;
        },
        sub: function(value){
            concatSub(value);
            return obj;
        },
        print: function(){
            return obj.value();
        }
    };
    return obj;

};
