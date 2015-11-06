//app.js
"use strict";
angular.module("Jeviteca", ['ngRoute']);

angular.module('Jeviteca').config(function(ProveedorModelosProvider, Config){

    ProveedorModelosProvider.habilitarPeticionesCors();
    ProveedorModelosProvider.establecerUrlBackend(Config.backendUrl);


});
