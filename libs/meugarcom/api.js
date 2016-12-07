
(function () {
  'use strict';

  angular.module('meugarcom.api', []);


  angular.module('meugarcom.api')

    .constant('URL_BASE', 'http://127.0.0.1/meugarcom/')

    .factory('meugarcomService', ['$http', function($http) {

      var _login = function (usuario) {
        var url = URL_BASE + 'login';
      };

      var _getCardapio = function (codigoRestaurante) {
        var url = URL_BASE + 'cardapio';
        
      };

      var _getGarcons = function (codigoRestaurante) {
        var url = URL_BASE + 'garcons';

      };

      var _getCozinhas = function (codigoRestaurante) {
        var url = URL_BASE + 'cozinhas';

      };

      var _getRelatorio = function (codigoRestaurante) {
        var url = URL_BASE + 'relatorio';

      };

      var _getPedidos = function (codigoRestaurante) {
        var url = URL_BASE + 'pedidos';

      };

      var _addPrato = function (prato, codigoRestaurante) {
        var url = URL_BASE + 'addPrato';

      };

      var _addGarcom = function (garcom, codigoRestaurante) {
        var url = URL_BASE + 'garcom';

      };

      var _addCozinha = function (cozinha, codigoRestaurante) {
        var url = URL_BASE + 'cozinha';

      };

      var _delPrato = function (codigoPrato, codigoRestaurante) {
        var url = URL_BASE + 'prato';

      };

      var _delGarcom = function (codigoGarcom, codigoRestaurante) {
        var url = URL_BASE + 'garcom';

      };

      var _delCozinha = function (codigoGarcom, codigoRestaurante) {
        var url = URL_BASE + 'cozinha';

      };

      return {
        login: _login
        , getCardapio: _getCardapio
        , getGarcons: _getGarcons
        , getCozinhas: _getCozinhas
        , getPedidos: _getPedidos
        , getRelatorio: _getRelatorio
        , addPrato: _addPrato
        , addGarcom: _addGarcom
        , addCozinha: _addCozinha
        , delPrato: _delPrato
        , delGarcom: _delGarcom
        , delCozinha: _delCozinha
      };
    }]);

})();
