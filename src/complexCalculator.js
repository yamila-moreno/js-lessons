function Calculator03(initialValue){
    "use strict"
    return function() {
        var array = arguments;
        return function(){
            for (var i=0; i<array.length; i++){
                initialValue = array[i](initialValue, arguments[i]);
            }
            return initialValue
        }
    }
}

function less03(initialValue, value){
    "use strict"
    return initialValue - value;
}

function more03(initialValue, value){
    "use strict"
    return initialValue + value;
}
