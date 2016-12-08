app
  .controller('LoginController', function ($scope, $state, meugarcomService) {
    $scope.title = 'Login';

    $scope.logar = function (login, senha, cargo) {

      $scope.teste = {login: login, senha: senha,cargo: cargo};
      meugarcomService.login(login, senha, cargo).success(function (data) {
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
      });
    };

  });
