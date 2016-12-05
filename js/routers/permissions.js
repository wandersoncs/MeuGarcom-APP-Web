app
  .factory('permissionService', function () {
    var user = {};

    var _setUser = function (usuario) {
      user = usuario;
    }

    var _isAdmin = function () {
      return (user === 'admin');
    }

    var _isGarcom = function () {
      return (user === 'garcom');
    }

    var _isCozinha = function () {
      return (user === 'cozinha');
    }

    return {
      isAdmin: _isAdmin
      , isGarcom: _isGarcom
      , isCozinha: _isCozinha
      , setUser: _setUser
    };
  });
