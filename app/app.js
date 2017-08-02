'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.demo'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {  //répétition $providers, fct($prov) pour création de min.js 
  $locationProvider.hashPrefix('!');
  
  $routeProvider
  .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/demo', {
    templateUrl: 'demo/demo.html',
    controller: 'DemoCtrl',
    controllerAs: 'ctrl'
  });
  $routeProvider.otherwise({redirectTo: '/view1'}); //redirige vers view1 si adresse http inconnue
}]);
