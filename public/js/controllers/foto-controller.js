angular.module('alurapic')
	.controller('FotoController', function($scope, $http,$resource, $routeParams) {

		$scope.foto = {};
		$scope.mensagem = '';

        var recursoFoto= $resource('/v1/fotos/:fotoId',null,{
            update:{
                method:'PUT'
            }
        });
        
		if($routeParams.fotoId) {
			$http.get('/v1/fotos/' + $routeParams.fotoId)
			.success(function(foto) {
				$scope.foto = foto;
			})
			.error(function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				if($routeParams.fotoId) {

                    recursoFoto.update({fotoId:$scope.foto._id},$scope.foto,function(){
                        $scope.mensagem ='Foto alterada com sucesso';
                    },function(erro){
                        console.log(erro);
                        $scope.mensagem='Não foi possivel alterar';
                    });
				} else { 
                    recursoFoto.save($scope.foto,function(){
                        $scope.foto={};
                        $scope.mensagem='foto incluida com sucesso';
                    },function(erro){
                        $scope.mensagem='Não foi possivel incluir a foto';
                        console.log(erro);
                    });

				}
			}
		};
	});