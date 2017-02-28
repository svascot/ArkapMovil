angular.module('arca.resultados', [])

.controller('ResultadosCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.$on('$ionicView.enter', function(e) {
  	$scope.vehiculos = [{imagen:'img/KIAPREGIO.jpg'},{imagen:'img/NISSANURVAN.jpg'},{imagen:'img/RENAULTMASTER.jpg'},{imagen:'img/YUTONG.jpg'}]
  	console.dir($scope.vehiculos)
  });
  
})


