function add01(value){
    "use strict"
    return function(initValue) {
        return initValue + value;
    }
}

function sub01(value){
    "use strict"
    return function(initValue) {
        return initValue - value;
    }
}

function calculator01(initValue, myArray){
    "use strict"
    var outArray = [];
    for (var i=0; i<myArray.length; i++){
        outArray.push(myArray[i](initValue));
    }
    return outArray;
}
