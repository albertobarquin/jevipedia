/**
 * Created by albertobarquin on 13/11/15.
 */
angular.module("Jeviteca")
    .directive("abkFav",["LocalStorageService",function(LocalStorageService){
        return {
            restrict: "AE",
            templateUrl: "views/fav.html",
            replace: true,
            scope:{
                tipo: "@",
                id: "="
            },
            link: function(scope){

                scope.hasLocalStorage = LocalStorageService.isLocalStorageAvailable;


                scope.isFavorite = function(){
                   return LocalStorageService.isFavorite (scope.tipo, scope.id);

                };


                scope.checkFavorite = function(){
                    return LocalStorageService.checkFavorite (scope.tipo, scope.id);
                };

                scope.uncheckFavorite = function(){
                    return LocalStorageService.uncheckFavorite (scope.tipo, scope.id);
                };
            }
        };
    }]);
