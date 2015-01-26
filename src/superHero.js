powers = {
    readOwnMind: function () {
        return this.name + ' can read her own mind'
    },
    invisible: function () {
        return this.name + ' can become invisible when nobody is watching'
    },
    superEar: function () {
        return this.name + ' can hear very far when using the phone'
    }
};

function superHero(hero, superPowers){
    'use strict'

    var obj = {
        power: function(power){
            return superPowers[power].apply(hero);
        }
    };

    return obj;
}
