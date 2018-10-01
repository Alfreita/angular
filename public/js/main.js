angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        // adicionando a propriedade controller que faltava. 

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({redirectTo: '/fotos'});

    });