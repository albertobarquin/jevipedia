/**
 * Created by albertobarquin on 15/11/15.
 */
angular.module("Jeviteca").filter("WikiLinkFilter",["Config",function(){
    return function (name){
        query = encodeURIComponent(name)
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
    }
}]);



