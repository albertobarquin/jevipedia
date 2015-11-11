angular.module('Jeviteca').directive('album',function(){
    return{
        restrict: "A",
        templateUrl:"views/album.html",
        scope: {
            album: "="
        }
    }
});
//TODO implementar on click para ir a la vista de detalle
//TODO implementar el botón de añadir a favoritos
