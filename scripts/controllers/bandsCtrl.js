/**
 * Created by albertobarquin on 6/11/15.
 */
angular.module("Jeviteca").controller("abandsCtrl", function($scope, Bands) {
    $scope.bands = Bands.data;
});
