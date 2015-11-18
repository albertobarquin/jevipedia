/**
 * Created by albertobarquin on 13/11/15.
 */
angular.module('Jeviteca').service('LocalStorageService', function(){
    this.isLocalStorageAvailable = function(){
        return typeof(Storage) !== 'undefined';
    };

    this.isFavorite = function (tipo,id){
        var favorite = localStorage.getItem(tipo + "_" + id);
        return favorite === "true";
    };

    this.checkFavorite = function(tipo, id){
        localStorage.setItem(tipo + "_" + id,"true");
    };

    this.uncheckFavorite = function(tipo, id){
        localStorage.removeItem(tipo + "_" + id);
    };
});
