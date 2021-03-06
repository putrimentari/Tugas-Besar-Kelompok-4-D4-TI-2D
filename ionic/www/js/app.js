// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    //update app.js
    $scope.binatang = data.binatang;
    $scope.onItemDelete = function(item){
      $scope.binatang.splice($scope.binatang.indexOf(item), 1);
    }
  });
}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/beranda.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.animals', {
    url: '/animals',
    views: {
      'tab-animals': {
        templateUrl: 'templates/animals.html',
      }
    }
  })

  .state('tab.buku', {
      url: '/buku',
      views: {
        'buku': {
          templateUrl: 'templates/bukutamu/list.html',
          controller: 'BukuCtrl'
        }
      }
    })
  
  .state('tab.buku-detail', {
      url: '/buku/:bukuId',
      views: {
        'buku': {
          templateUrl: 'templates/bukutamu/detail.html',
          controller: 'BukuDetailCtrl'
        }
      }
    })

  .state('tab.tambah', {
    url: '/tambah',
    views: {
      'tambah': {
        templateUrl: 'templates/bukutamu/tambah.html',
        controller: 'TambahCtrl'
      }
    }
  })

  .state('tab.tentang', {
    url: '/tentang',
    views: {
      'tentang': {
        templateUrl: 'templates/tentang.html',
        controller: 'TentangCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
