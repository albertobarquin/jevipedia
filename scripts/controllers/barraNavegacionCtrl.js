angular.module("Jeviteca").controller('BarraNavegacionCtrl',function($scope, $route){

    //devuelve true si todas las condiciones son ciertas
    $scope.rutaEsAlbums = function(){
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/albums";
    };

    $scope.rutaEsBands = function(){
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/bands";
    };

    $scope.rutaEsGenres = function(){
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/genres";
    };

});
