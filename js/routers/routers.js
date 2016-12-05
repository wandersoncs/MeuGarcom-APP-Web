app
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('login', {
      url: '/'
      , views: {
        'navbar': {
          templateUrl: 'views/login/header.html'
          , controller: 'MainController'
        }
        , 'content': {
          templateUrl: 'views/login/index.html'
          , controller: 'MainController'
        }
      }
    });
  });
