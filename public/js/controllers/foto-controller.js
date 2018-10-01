// public/js/controllers/foto-controller.js
angular.module('alurapic').controller('FotoController', function($scope) {

        $scope.foto = {};

        $scope.submeter = function() {
            console.log($scope.foto);
        };

    });