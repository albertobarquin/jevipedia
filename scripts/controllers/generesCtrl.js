/**
 * Created by albertobarquin on 6/11/15.
 */
angular.module("Jeviteca").controller("generesCtrl", function($scope, Generes) {
    $scope.generes = Generes.data;
});
