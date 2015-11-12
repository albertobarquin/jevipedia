angular.module('Jeviteca').directive('abkGenre',function(){
    return{
        templateUrl:"views/genre.html",
        restrict: "A",
        scope: {
            genre: "="
        }
    }
});
