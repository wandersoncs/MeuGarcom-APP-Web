app
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('login', {
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
      })

      .state('gerente', {
        url: '/gerente'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/cadastro-garcom.html'
            , controller: 'GerenteController'
          }
        }
      })

      .state('cadastro-garcom', {
        url: '/cadastro-garcom'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/cadastro-garcom.html'
            , controller: 'GerenteController'
          }
        }
      })

      .state('cadastro-cozinha', {
        url: '/cadastro-cozinha'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/cadastro-cozinha.html'
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

      .state('cadastro-cardapio', {
        url: '/cadastro-cardapio'
        , views: {
          'navbar': {
            templateUrl: 'views/cozinha/header.html'
            , controller: 'CozinhaController'
          }
          , 'content': {
            templateUrl: 'views/cozinha/cadastro-cardapio.html'
            , controller: 'CozinhaController'
          }
        }
      })

      .state('cardapio', {
        url: '/cardapio'
        , views: {
          'navbar': {
            templateUrl: 'views/cozinha/header.html'
            , controller: 'CozinhaController'
          }
          , 'content': {
            templateUrl: 'views/cozinha/cadastro-cardapio.html'
            , controller: 'CozinhaController'
          }
        }
      })

      .state('garcom', {
        url: '/garcom'
        , views: {
          'navbar': {
            templateUrl: 'views/cozinha/header.html'
            , controller: 'CozinhaController'
          }
          , 'content': {
            templateUrl: 'views/cozinha/cadastro-cardapio.html'
            , controller: 'CozinhaController'
          }
        }
      })

      .state('relatorio', {
        url: '/relatorio'
        , views: {
          'navbar': {
            templateUrl: 'views/gerente/header.html'
            , controller: 'GerenteController'
          }
          , 'content': {
            templateUrl: 'views/gerente/relatorio.html'
            , controller: 'GerenteController'
          }
        }
      })

      ;
  });
