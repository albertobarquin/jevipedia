angular.module('Jeviteca').directive('album',function(){
    return{
        templateUrl:"views/album.html",
        scope: {
            album: "="
        }
    }
});
