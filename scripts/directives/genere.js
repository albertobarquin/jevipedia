angular.module('Jeviteca').directive('genere',function(){
    return{
        templateUrl:"views/genere.html",
        scope: {
            genere: "="
        }
    }
});
