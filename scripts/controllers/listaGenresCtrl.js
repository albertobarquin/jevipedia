angular.module("Jeviteca").controller("listaGenresCtrl", function($scope, Genres) {

    $scope.genres = Genres.data;
});
