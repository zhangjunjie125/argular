import{A} from './2.js'
require('./index.css')
require('./other.css')
import angular from "angular";
// document.write(A);

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.firstName = "John";

    $scope.lastName = "Doe";

});

// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope) {

//     $scope.firstName = "John";

//     $scope.lastName = "Doe";

// });

