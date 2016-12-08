(function () {
  'use strict';

  angular.module('meugarcom.api', []);

  angular.module('meugarcom.api')

    .config(function ($httpProvider) {
      $httpProvider.defaults.headers.delete = { 'Content-Type' : 'application/json' };
    })

    .service('meugarcomService', ['$http', function($http) {

      var URL_BASE = 'http://localhost:8080/';

      var _login = function (loginForm) {
        var url = URL_BASE + 'login';
        return $http.post(url, loginForm);
      };

      var _getCardapio = function () {
        var url = URL_BASE + 'gerente/cardapio';
        return $http.get(url);
      };

      var _getFuncionarios = function () {
        var url = URL_BASE + 'gerente/funcionario';
        return $http.get(url);
      };

      var _getPedidosCozinha = function () {
        var url = URL_BASE + 'cozinha/pedido';
        return $http.get(url);
      };

      var _getPedidosGarcom = function () {
        var url = URL_BASE + 'garcom/pedido';
        return $http.get(url);
      };

      var _getPedidosGerente = function () {
        var url = URL_BASE + 'gerente/pedido'
        return $http.get(url);
      };

      var _removerPedidoCozinha = function (id) {
        var url = URL_BASE + 'cozinha/pedido/' + id;
        return $http.delete(url);
      };

      var _removerPedidoGarcom = function (id) {
        var url = URL_BASE + 'garcom/pedido/' + id;
        return $http.delete(url);
      };

      var _adicionarPrato = function (prato) {
        var url = URL_BASE + 'gerente/prato';
        return $http.post(url, prato);
      };

      var _removerPrato = function (id) {
        var url = URL_BASE + 'gerente/prato/' + id;
        return $http.delete(url);
      };

      var _adicionarFuncionario = function (funcionario) {
        funcionario.cod_usuario = 1;
        var url = URL_BASE + 'gerente/funcionario';
        return $http.post(url, funcionario);
      };

      var _removerFuncionario = function (id) {
        var url = URL_BASE + 'gerente/funcionario/' + id;
        return $http.delete(url);
      };

      var _atualizarPedidoGarcom = function () {
        var url = URL_BASE + 'garcom/pedido/quantidade'
        return $http.get(url);
      };

      var _atualizarPedidoCozinha = function () {
        var url = URL_BASE + '/cozinha/pedido/quantidade'
        return $http.get(url);
      };

      return {
        login: _login
        , getCardapio: _getCardapio
        , getFuncionarios: _getFuncionarios
        , getPedidosCozinha: _getPedidosCozinha
        , getPedidosGarcom: _getPedidosGarcom
        , getPedidosGerente: _getPedidosGerente
        , adicionarPrato: _adicionarPrato
        , adicionarFuncionario: _adicionarFuncionario
        , removerPedidoCozinha: _removerPedidoCozinha
        , removerPedidoGarcom: _removerPedidoGarcom
        , removerPrato: _removerPrato
        , removerFuncionario: _removerFuncionario
        , atualizarPedidoGarcom: _atualizarPedidoGarcom
        , atualizarPedidoCozinha: _atualizarPedidoCozinha
      };
    }]);

})();
