app
  .controller('LoginController', function ($scope, $state) {
    $scope.title = 'Login';

    $scope.logar = function (login, senha, cargo) {

      switch (cargo) {
        case 'gerente':
          $state.go('gerente');
        break;
        case 'garcom':
          $state.go('garcom');
        break;
        case 'cozinha':
          $state.go('cozinha');
        break;
      }
    };

  });
