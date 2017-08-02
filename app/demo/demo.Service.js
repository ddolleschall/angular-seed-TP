'use strict';

angular.module('myApp.demo')
.service('DemoService', [ '$filter', 'config', '$http', '$resource', '$q',
function($filter, config,$http,$resource,$q) {
   
    this.compute = function (person) {

        return 'Bonjour je suis ' + person.yourName + ' ' + person.yourPrenom 
        + ' et jai ' + person.yourAge+ ' ans, ça fait ' + $filter('yearToMonth')(person.yourAge) 
        + ' mois et je suis ' + (person.yourAge > 10 ? 'grand' : 'petit');
    };

this.logConfig = function(){
    console.log(config.apiUrl);
}
// ===================== Première méthode de gestion promesse

this.getPosts = function() {
    /*var promise = $http.get(config.apiUrl);
    console.log(promise);
    return promise;*/
    return $http.get(config.apiUrl);

    // $http.({method:'GET', url: ''}) (version longue)
}

 // ===================== Seconde méthode de gestion promesse


this.getPostsViaResource = function() {
    return $resource(config.apiUrl).query();
}


}]);