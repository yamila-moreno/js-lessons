function countChar05(initArray){
    "use strict";
    var outArray = [];
    for(var i=0; i<initArray.length; i++){
        outArray.push(addToArray05(initArray[i]));
    }
    return outArray;
}

function addToArray05(str) {
    return function(bool){
        bool = bool || false;
        if(bool){
            return str.length + ' caracteres';
        } else {
            return str.length;
        }
    }
}
