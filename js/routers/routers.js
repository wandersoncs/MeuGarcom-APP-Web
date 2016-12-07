app

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('login', {
        url: '/'
        , views: {
          'navbar': {
            templateUrl: 'views/login/header.html'
            , controller: 'LoginController'
          }
          , 'content': {
            templateUrl: 'views/login/index.html'
            , controller: 'LoginController'
          }
        }
      })

      .state('gerente', {
        url: '/gerente/relatorio'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/index.html'
            , controller: 'GerenteController'
          }
        }
      })

      .state('funcionario', {
        url: '/gerente/funcionario'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/funcionario.html'
            , controller: 'GerenteController'
          }
        }
      })

      .state('cozinha', {
        url: '/cozinha'
        , views: {
          'navbar': {
            templateUrl: 'views/cozinha/header.html'
            , controller: 'CozinhaController'
          }
          , 'content': {
            templateUrl: 'views/cozinha/index.html'
            , controller: 'CozinhaController'
          }
        }
      })

      .state('cardapio', {
        url: '/gerente/cardapio'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/cardapio.html'
            , controller: 'CardapioController'
          }
        }
      })

      .state('garcom', {
        url: '/garcom'
        , views: {
          'navbar': {
            templateUrl: 'views/garcom/header.html'
            , controller: 'GarcomController'
          }
          , 'content': {
            templateUrl: 'views/garcom/index.html'
            , controller: 'GarcomController'
          }
        }
      })
      ;
  })
;
