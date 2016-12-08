app

  .controller('CozinhaController', function ($scope, $timeout, meugarcomService, $interval) {

    $scope.title = 'Pratos para serem preparados';

    $scope.pedidos = [];

    $interval(function () {
      meugarcomService.atualizarPedidoCozinha().success(function (data) {
        if ($scope.pedidos.length !== data.quantidade)
          atualizar();
      });
    }, 5000);

    var atualizar = function () {
      meugarcomService.getPedidosCozinha().success(function (data) {
        $timeout(function () {
          $scope.pedidos = data;
        });
      });
    };

    atualizar();

    $scope.pedidoPronto = function (pedido) {
      meugarcomService.removerPedidoCozinha(pedido.id).success(function (data) {
        atualizar();
        });
    };

  })
;
