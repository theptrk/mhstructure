// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'drugs',
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('main', {
      url: '/',
      abstract: true,
      templateUrl: 'main.html'
      //template: '<ion-view name="main_view"></ion-view>'
      // template: '<ui-view></ui-view>'
    })

    .state('drugs', {
      url: '/drugs',
      abstract: true,
      templateUrl: 'main.html'
    })

    .state('drugs.input', {
      url: '/input',
      views: {
        'drugs':{
          templateUrl: 'js/drugs/drugs_input.html',
          controller: 'DrugCtrl'
        }
      }
    })

    .state('drugs.output', {
      url: '/output',
      views: {
        'drugs':{
          templateUrl: 'js/drugs/drugs_output.html',
          controller: 'DrugCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/drugs');
})
