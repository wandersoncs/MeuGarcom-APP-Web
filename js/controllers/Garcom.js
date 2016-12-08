app

  .controller('GarcomController', function ($scope, $timeout, $interval, meugarcomService) {

    $scope.title = 'Pratos para serem entregues';

    $scope.pedidos = [];
    var atualizar = function () {
      meugarcomService.getPedidosGarcom().success(function (data) {
        $timeout(function () {
          $scope.pedidos = data;
        });
      });
    };

    atualizar();

    $interval(function () {
      meugarcomService.atualizarPedidoGarcom().success(function (data) {
        if ($scope.pedidos.length !== data.quantidade)
          atualizar();
      });
    }, 5000);

    $scope.pedidoEntregue = function (pedido) {
      meugarcomService.removerPedidoGarcom(pedido.id).success(function () {
        atualizar();
      });
    };

  })
;
