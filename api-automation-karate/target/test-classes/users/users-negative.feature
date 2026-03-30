Feature: Casos negativos de usuarios en ServeRest

  Background:
    * url baseUrl

  Scenario: Registrar usuario con email duplicado
    * def duplicatedEmail = 'qa' + java.util.UUID.randomUUID() + '@mail.com'
    * def userBody =
    """
    {
      "nome": "User Test",
      "email": "#(duplicatedEmail)",
      "password": "123456",
      "administrador": "true"
    }
    """

    Given path '/usuarios'
    And request userBody
    When method POST
    Then status 201

    Given path '/usuarios'
    And request userBody
    When method POST
    Then status 400
    And match response.message == 'Este email já está sendo usado'

Scenario: Buscar usuario inexistente
  Given path '/usuarios', '000000000000000000000000'
  When method GET
  Then status 400
  * print 'RESPONSE =>', response