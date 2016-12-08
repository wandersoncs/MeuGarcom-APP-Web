app

  .controller('GarcomController', function ($scope) {

    $scope.title = 'Pratos para serem entregues';

    $scope.pedidos = [];

    meugarcomService.getPedidosGarcom().success(function (data) {
      $scope.$apply(function () {
        $scope.pedidos = data;
      });
    });

    $scope.pedidoEntregue = function (pedido) {
      meugarcomService.removerPedidoGarcom(pedido.id).success(function () {
        meugarcomService.getPedidosGarcom().success(function (data) {
          $scope.$apply(function () {
            $scope.pedidos = data;
          });
        });
      })
    };

  })
;
