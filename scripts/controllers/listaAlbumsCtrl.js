/**
 * Created by albertobarquin on 6/11/15.
 */
angular.module("Jeviteca").controller("listaAlbumsCtrl", function($scope, Albums) {
    $scope.albums = Albums.data
    debugger;
});
