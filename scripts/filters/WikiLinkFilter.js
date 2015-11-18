/**
 * Created by albertobarquin on 15/11/15.
 */
angular.module("Jeviteca").filter("WikiLinkFilter",['Config',function(Config){
    return function (name){
        var query = encodeURIComponent(name)
        return Config.wikiUrl + query;
    }
}]);



