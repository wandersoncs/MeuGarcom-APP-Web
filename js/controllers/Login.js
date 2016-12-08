app
  .controller('LoginController', function ($scope, $state, meugarcomService) {
    $scope.title = 'Login';

    $scope.logar = function (user) {
      meugarcomService.login(user).success(function (data) {
          switch (user.cargo) {
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
