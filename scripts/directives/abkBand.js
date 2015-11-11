angular.module('Jeviteca').directive('abkBand',function(){
   return{
       restrict: "A",
       templateUrl:"views/band.html",
       scope: {
           band: "="
       }
   }
});
