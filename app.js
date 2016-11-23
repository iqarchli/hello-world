(function () {
    var app = angular.module('MyApp', []);  
    app.controller('HomeController', function ($scope,$http) {
        $scope.message = "yo!";
    });
})();
