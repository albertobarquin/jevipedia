/**
 * Created by albertobarquin on 6/11/15.
 */
angular.module('Jeviteca').provider('ProveedorModelos', function($httpProvider){

    var urlBackend = "";//¿es necesario?

    return {


        // Con esta función habilitamos cruce de dominio en las peticiones.
        habilitarPeticionesCors: function() {
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        },

        // Con esta función establecemos la URL del backend.
        establecerUrlBackend: function(valor) {
            urlBackend = valor;
        },

        // Definimos el factory que se inyectará en fase de run.
        $get:["$http", function($http){

            return {
                //obtenemos los albums
                getAlbums: function() {
                    return $http.get(urlBackend + "/albums.json", {
                        cache: true

                    });
                },
                getBands: function() {
                    return $http.get(urlBackend + "/bands.json", {
                        cache: true

                    });
                },
                getGenres: function() {
                    return $http.get(urlBackend + "/genres.json", {
                        cache: true

                    });
                }
            }

        }]
    }
});
