(function () {
  'use strict';

  angular.module('meugarcom.api', []);

  angular.module('meugarcom.api')

    .service('meugarcomService', ['$http', function($http) {

      var URL_BASE = 'http://localhost:8080/';

      var _login = function (login, senha, cargo) {
        var url = URL_BASE + 'login';
        return $http.post(url, login, senha, cargo);
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
        var url = URL_BASE + 'pedidos/cozinha';
        return $http.get(url);
      };

      var _getPedidosGarcom = function () {
        var url = URL_BASE + 'pedidos/garcom';
        return $http.get(url);
      };

      var _getPedidosGerente = function () {
        var url = URL_BASE + 'pedidos/gerente'
        return $http.get(url);
      };

      var _removerPedidoCozinha = function (id) {
        var url = URL_BASE + 'cozinha/pedido';
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
        var url = URL_BASE + 'gerente/funcionario';
        return $http.post(url, funcionario);
      };

      var _removerFuncionario = function (id) {
        var url = URL_BASE + 'gerente/funcionario/' + id;
        return $http.delete(url);
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
      };
    }]);

})();
