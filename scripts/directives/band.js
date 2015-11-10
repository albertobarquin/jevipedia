angular.module('Jeviteca').directive('band',function(){
   return{
       templateUrl:"views/band.html",
       scope: {
           band: "="
       }
   }
});
