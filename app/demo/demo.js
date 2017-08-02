'use strict';

angular.module('myApp.demo', ['ngRoute'])
    .controller('DemoCtrl', ['$scope', 'DemoService', '$q', '$timeout', '$location',
        function ($scope, DemoService, $q, $timeout, $location) {

            $scope.a = 'SALIT SALUT';

            $scope.person = {};

            $scope.$watch('person', function () {
                $scope.result = DemoService.compute($scope.person);
            }, true);


            $scope.books = [
                { 'id': 1, 'author': 'Jack', 'title': 'Moi' },
                { 'id': 2, 'author': 'John', 'title': 'Mon ami' },
                { 'id': 3, 'author': 'Jack', 'title': 'Mon ami' },
                { 'id': 4, 'author': 'Max', 'title': 'L\'autre' }
            ]

            $scope.books.forEach(function (b) {
                b.text = b.id + ' ' + b.author + ' ' + b.title
            });

            DemoService.logConfig();

            //DemoService.getPosts().then(function(response){reussite}, function(error) {échec});
            var promise = DemoService.getPosts();
            var promise2 = promise.then(function (response) {
                console.log(response);
                console.log('promise resolved');
                $scope.donnees = response.data;
                return 'promise1';
            }, function () {
                console.log('erreur promise')
            })
                .then(function (p) {
                    console.log(p)
                });
            // ===================== Seconde méthode de gestion promesse

            var data = DemoService.getPostsViaResource();
            $scope.data = DemoService.getPostsViaResource();
            console.log($scope.data)
            $scope.data.$promise.then(function () {
                console.log($scope.data)
            });

            // ===================== $q : création promesse
            var defer = $q.defer();

            defer.promise.then(function (val) {
                console.log(val)
            }, function (val) {
                console.log(val)
            })

            // $timeout(function() {
            // defer.resolve('Promesse tenue')}, 1000);
            $timeout(function () {
                defer.reject('Promesse brisée')
            }, 1000);

            console.log($location.path());
            console.log($location.search());

            $scope.submitNew = function () {
                if($scope.demoForm.$valid){
                    $location.path('/view1');
                    console.log('submit success')
                }
                console.log('submitted');
            }

    


                $scope.titre = $location.search().titre;
                $scope.auteur = $location.search().auteur;

        }]);