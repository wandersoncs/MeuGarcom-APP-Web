# MeuGarcom

##Entidades
```javascript
Usuario(long id, String nome, String cargo, String login, String senha, long restaurante)
Restaurante(long id, long longitude, long latitude, String nome, int qntMesa)
Cliente(String nome, int mesa)
Prato(long id, String nome, String descricao, double preco)
Cardapio(long id, List<Prato> pratos, long restaurante)
Pedido(long id, Cliente cliente, List<Prato> pratos)
```

##API
```java
LoginService
//Se ok: retorna o código do restaurante
  "login/" - POST(String login, String senha, String cargo)


RestauranteService
//Lista todos os restaurantes cadastrados no sistema
//id deve ser 4 numeros
  "restaurante/listar" - GET()


GerenteService
//lista todos os pratos já concluidos no dia em questão (retorna uma lista de pratos)
  "gerente/pedido/" - GET(long restaurante)

//adiciona e remove prato no cardapio do restaurante
  "gerente/prato/" POST(Prato prato, long restaurante), DELETE(long prato, long restaurante)

//retorna o cardapio do restaurante
  "gerente/cardapio/" - GET(long restaurante)

//adiciona um funcionario
  "gerente/funcionario/" - POST(Funcionario funcionario)

//remove um funcionario
  "gerente/funcionario/" - DELETE(Funcionario funcionario)

//retorna todos os funcionario do restaurante
  "gerente/funcionario/" - GET(long restaurante)


CozinhaService
//Retorna a lista de pratos para serem preparados
  "cozinha/pedido" - GET(long restaurante)

//Adiciona um pedido(contem uma lista de pratos) na lista de pratos para serem preparados
  "cozinha/pedido" - POST(Cliente cliente, Pedido pedido, long restaurante)

//Quando o prato for preparado, o prato deve ser retirado
// da lista da cozinha e adicionado na lista do garcom
  "cozinha/prato" - DELETE(Prato prato, long restaurante)


GarcomService
//Retorna a lista de pratos para serem entregues(já estão preparados)
  "garcom/pedido" - GET(long restaurante)

//Quando o garcom entrega o prato, o prato deve ser removido da
// lista do garcom e adicionado na lista do gerente
"garcom/prato" - DELETE(Prato prato, long restaurante)
```
