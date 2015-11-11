angular.module('Jeviteca').directive('abkGenre',function(){
    return{
        templateUrl:"views/genre.html",
        scope: {
            genre: "="
        }
    }
});
