let app = angular.module("App", [
    'ngRoute',
    'user',
    'car'
])

app.controller('AppController', function AppController($scope, $location) {
    $location.path(redirectUrl);
})

app.config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
    $routeProvider.when('/users', {
        template: '<user></user>'
    }).when('/cars', {
        template: '<car></car>'
    })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}])

function redirectFromIndex() {
}