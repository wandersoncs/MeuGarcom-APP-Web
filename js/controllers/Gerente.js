app

  .controller('GerenteController', function ($scope, meugarcomService) {
    $scope.title = 'Gerente';
    $scope.pedidos = [];

    meugarcomService.getPedidosGerente().success(function (data) {
      $scope.pedidos = data;
    });

  })

  .controller('CardapioController', function ($scope, meugarcomService) {
    $scope.cardapio = [];

    var atualizar = function () {
      meugarcomService.getCardapio().success(function (data) {
        $scope.$apply(function () {
          $scope.cardapio = data;
        });
      });
    };

    atualizar();

    $scope.removerPrato = function (prato) {
      meugarcomService.removerPrato(prato.id).success(function () {
        atualizar();
      });
    };

    $scope.adicionarPrato = function (prato) {
      prato.id = 1;
      meugarcomService.adicionarPrato(prato).success(function () {
        atualizar();
      });
    };

  })

  .controller('FuncionarioController', function ($scope, meugarcomService, $state) {

    $scope.funcionario = [];

    var atualizar = function () {
      meugarcomService.getFuncionarios().success(function (data) {
        $scope.$apply(function () {
          $scope.funcionarios = data;
        });
      });
    };

    atualizar();

    $scope.adicionarFuncionario = function (usuario) {
      meugarcomService.adicionarFuncionario(usuario).success(function () {
        atualizar();
      });
    };

    $scope.removerFuncionario = function (funcionario) {
      meugarcomService.removerFuncionario(funcionario.id).success(function () {
        atualizar();
      });
    };

  })
;
