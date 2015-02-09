function puppet(person){
    'use strict'

    return function(whatToSay) {
        return person[whatToSay].bind(person);
    }
}
