var List07 = (function(){
    'use strict'
    var privateValue = [];

    var obj = {
        value: function(){
            return privateValue;
        },
        add: function(newElement){
            privateValue.push(newElement);
        },
        print: function(){
            return obj.value();
        },
        find: function(element){
            if (privateValue.indexOf(element) < 0){
                return 'Not found';
            }
            return privateValue.indexOf(element);
        },
        remove: function(position){
            privateValue.splice(position, 1);
        },
        removeItem: function(element){
            var position = obj.find(element);
            if (position != 'Not found'){
                obj.remove(position);
            }
        },
        reset: function(){
            privateValue = [];
        }
    };
    return obj;

})();
