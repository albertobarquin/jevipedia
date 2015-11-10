/**
 * Created by albertobarquin on 6/11/15.
 */
angular.module("Jeviteca").controller("albumsCtrl", function($scope, Albums) {
    $scope.albums = Albums.data;
});
