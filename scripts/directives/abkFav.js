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
                    var favorite = localStorage.getItem(scope.tipo + "_" + scope.id);
                    return favorite === "true";
                };

                scope.checkFavorite = function(){
                    localStorage.setItem(scope.tipo + "_" + scope.id,"true");
                };

                scope.uncheckFavorite = function(){
                    localStorage.removeItem(scope.tipo + "_" + scope.id);
                };
            }
        };
    }]);
