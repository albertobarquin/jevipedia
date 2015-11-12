//app.js
"use strict";
angular.module("Jeviteca", ['ngRoute']);

angular.module('Jeviteca').config(function(ProveedorModelosProvider, Config){

    ProveedorModelosProvider.habilitarPeticionesCors();
    ProveedorModelosProvider.establecerUrlBackend(Config.backendUrl);


});

// Vamos a configurar las rutas de la aplicación
angular.module("Jeviteca").config(function($routeProvider) {

    // Definir la ruta de "albums".
    $routeProvider.when("/albums", {
        controller: "ListaAlbumsCtrl",
        templateUrl: "views/listaAlbums.html",
        // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        // Tenemos que usar la anotación de array en línea.
        resolve: {
            Albums: ["ProveedorModelos", function(ProveedorModelos) {

                return ProveedorModelos.getAlbums();


            }]
        }
    });
    // Definir la ruta de "bands".
    $routeProvider.when("/bands", {
        controller: "listaBandsCtrl",
        templateUrl: "views/listaBands.html",
        // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        // Tenemos que usar la anotación de array en línea.
        resolve: {
            Bands: ["ProveedorModelos", function(ProveedorModelos) {

                return ProveedorModelos.getBands();


            }]
        }
    });
    // Definir la ruta de "genres".
    $routeProvider.when("/genres", {
        controller: "listaGenresCtrl",
        templateUrl: "views/listaGenres.html",
        // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        // Tenemos que usar la anotación de array en línea.
        resolve: {
            Genres: ["ProveedorModelos", function(ProveedorModelos) {

                return ProveedorModelos.getGenres();


            }]
        }
    });


    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

});
