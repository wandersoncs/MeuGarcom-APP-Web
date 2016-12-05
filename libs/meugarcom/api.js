
(function () {
  'use strict';

  angular.module('meugarcom.api', []);


  angular.module('meugarcom.api')

    .constant('URL_BASE', 'http://127.0.0.1/meugarcom/')

    .factory('meugarcomService', ['$http', function($http) {

      var _login = function (usuario) {

      }

      var _get

      return {
        login: _login
      };
    }]);

})();
