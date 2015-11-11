//app.js
"use strict";
angular.module("Jeviteca", ['ngRoute']);

angular.module('Jeviteca').config(function(ProveedorModelosProvider, Config){

    ProveedorModelosProvider.habilitarPeticionesCors();
    ProveedorModelosProvider.establecerUrlBackend(Config.backendUrl);


});

// Vamos a configurar las rutas de la aplicación
angular.module("Jeviteca").config(function($routeProvider) {

    // Definir la ruta de "Todos los posts".
    $routeProvider.when("/albums", {
        controller: "listaAlbumsCtrl",
        templateUrl: "views/listaAlbums.html",
        // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        // Tenemos que usar la anotación de array en línea.
        resolve: {
            Albums: ["ProveedorModelos", function(ProveedorModelos) {

                return ProveedorModelos.getAlbums();


            }]
        }
    });



    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

});
