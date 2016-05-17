var app = angular.module('menuModule',[]);

app.controller('menuController',function($scope,$http, $window){
	
	var url = 'http://localhost:8080/Seguranca/rs/sistema';
	var urlLogout = 'http://localhost:8080/Seguranca/rs/logout';
	
	//$scope.sistemas = [{"url":"http://localhost:8080/TrabalhoPDS2","nome":"Sistema Pedido"},
	  //              {"url":"http://localhost:8080/Seguranca","nome":"Seguranca"}];
	
	$scope.pesquisar = function(){
		$http.get(url).success(function (sistemasRetorno) {
			$scope.sistemas = sistemasRetorno;
		}).error(function(mensagemErro) {
			alert(mensagemErro);
		});   
	}
	
	$scope.logout = function() {
		$http.get(urlLogout).success(function() {
			$window.location.href = '/Seguranca/login.html';
			$windows.redirect();
		}).error(function(mensagemErro) {
			alert(mensagemErro);
		}); 
	}

	$scope.pesquisar();
});