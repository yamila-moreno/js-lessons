function comparador02(initValue){
    "use strict"
    return function(compValue) {
        if (initValue.length > compValue.length) {
            return initValue + ' tiene más letras que ' + compValue;
        } else {
            return initValue + ' tiene menos letras que ' + compValue;
        }
    }
}
