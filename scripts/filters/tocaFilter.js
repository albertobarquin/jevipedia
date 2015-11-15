angular.module("Jeviteca")
    .filter("tocaFilter",function(){
        return function(instrumentos){
            return "tocando " + instrumentos.join(", ");
        }
    });
