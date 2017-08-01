'use strict';

angular.module('myApp.demo', ['ngRoute'])
.controller('DemoCtrl', ['$scope', 'DemoService' , function($scope, DemoService) {
    $scope.a = 'SALIT SALUT';

    $scope.person = {};

    $scope.$watch('person', function(){    
         $scope.result =  DemoService.compute($scope.person);
    
         $scope.books = [
             {'author':'Jack', 'title':'Moi'},
              {'author':'John', 'title':'Mon ami'},
               {'author':'Max', 'title':'L\'autre'}]

    }, true);


}]);