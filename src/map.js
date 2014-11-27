function map06(array, fn){
    "use strict"
    var outArray = [];
    for (var i=0; i<array.length; i++){
        outArray.push(fn(array[i]));
    }
    return outArray;
}

function filter06(array, fn){
    "use strict"
    var outArray = [];
    for (var i=0; i<array.length; i++){
        if (fn(array[i])){
            outArray.push(array[i]);
        }
    }
    return outArray;
}

function some06(array, fn){
    "use strict"
    for (var i=0; i<array.length; i++){
        if (fn(array[i])){
           return true;
        }
    }
    return false;
}
