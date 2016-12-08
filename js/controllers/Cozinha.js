app

  .controller('CozinhaController', function ($scope, $timeout, meugarcomService) {

    $scope.title = 'Pratos para serem preparados';

    $scope.pedidos = [];

    meugarcomService.getPedidosCozinha().success(function (data) {
      $scope.$apply(function () {
        $scope.pedidos = data;
      });
    });

    $scope.pedidoPronto = function (pedido) {
      meugarcomService.removerPedidoCozinha(pedido.id).success(function (data) {
        meugarcomService.getPedidosCozinha().success(function (data) {
          $scope.$apply(function () {
            $scope.pedidos = data;
          });
        });
      });
    };

  })
;
