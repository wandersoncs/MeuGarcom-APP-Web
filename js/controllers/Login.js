app
  .controller('LoginController', function ($scope, $state) {
    $scope.title = 'Login';
    $scope.erro = '';

    $scope.login = function (usuario) {
      if (usuario.user === 'gerente' && usuario.password === 'gerente') {
        $state.go('gerente');
      } else {
        erro = 'Usuario e/ou Senha incorretas';
      }
    };

  });
