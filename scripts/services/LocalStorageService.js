/**
 * Created by albertobarquin on 13/11/15.
 */
angular.module('Jeviteca').service('LocalStorageService', function(){
    this.isLocalStorageAvailable = function(){
        if(typeof (Storage)!== 'undefined'){
            return 'true';
        }
        else{
            return 'false';
        }
    }
});
