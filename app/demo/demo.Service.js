'use strict';

angular.module('myApp.demo')
.service('DemoService', [ '$filter', function($filter) {
   
    this.compute = function (person) {

        return 'Bonjour je suis ' + person.yourName + ' ' + person.yourPrenom 
        + ' et jai ' + person.yourAge+ ' ans, ça fait ' + $filter('yearToMonth')(person.yourAge) 
        + ' mois et je suis ' + (person.yourAge > 10 ? 'grand' : 'petit');
    };

}]);