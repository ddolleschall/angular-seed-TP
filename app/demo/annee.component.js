'use strict';


angular.module('myApp.demo')
.component('annee',  {
    template: '<span>{{$ctrl.value + " " + ($ctrl.value && $ctrl.value > 1 ? "ans" : "an")}}</span>',
    bindings : {
        value: '<'
    }
});