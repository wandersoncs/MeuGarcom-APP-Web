app

  .controller('GarcomController', function ($scope) {

    $scope.title = 'Pratos para serem entregues';
    $scope.pratosProntos = [
      {nome: 'arroz com abobora', 'cliente': {'nome': 'wanderson', 'mesa': 5}}
      , {nome: 'frango', 'cliente': {'nome': 'wanderson', 'mesa': 3}}
    ];

  })
;
