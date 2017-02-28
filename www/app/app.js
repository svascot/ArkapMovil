angular.module('arca', ['ionic', 'arca.modules','ion-datetime-picker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.run(function($state,$rootScope){
    $rootScope.goTo=function(state){
    return $state.go(state);
  }

})

.run(function($ionicPickerI18n) {
    $ionicPickerI18n.weekdays = ["Dom", "Lu", "Mar", "Mie", "Jue", "Vier", "Sab"];
    $ionicPickerI18n.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nobiembre", "Diciembre"];
    $ionicPickerI18n.ok = "Aceptar";
    $ionicPickerI18n.cancel = "Cancelar";
    $ionicPickerI18n.okClass = "button-balanced";
    $ionicPickerI18n.cancelClass = "button-stable";
  })


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/template/menu.html'
  })
    
  .state('app.formularioBusqueda', {
    url: '/formularioBusqueda',
    views: {
      'menuContent': {
        templateUrl: 'app/busqueda/formularioBusqueda.html',
        controller: 'FormularioBusquedaCtrl'
      }
    }
  })
  .state('app.resultados', {
      url: '/resultados',
      views: {
        'menuContent': {
          templateUrl: 'app/resultados/resultados.html',
          controller: 'ResultadosCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/formularioBusqueda');
});
