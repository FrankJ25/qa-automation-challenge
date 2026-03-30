Feature: CRUD de usuarios en ServeRest

  Background:
    * url baseUrl
    * def randomEmail = 'frank' + java.util.UUID.randomUUID() + '@mail.com'
    * def newUser =
    """
    {
      "nome": "Frank Pozo",
      "email": "#(randomEmail)",
      "password": "123456",
      "administrador": "true"
    }
    """

  Scenario: Listar usuarios
    Given path '/usuarios'
    When method GET
    Then status 200
    And match response == read('classpath:schemas/usersListSchema.json')

  Scenario: Registrar usuario con datos válidos
    Given path '/usuarios'
    And request newUser
    When method POST
    Then status 201
    And match response.message == 'Cadastro realizado com sucesso'
    And match response._id == '#string'

  Scenario: Buscar usuario por ID
    Given path '/usuarios'
    And request newUser
    When method POST
    Then status 201
    * def userId = response._id

    Given path '/usuarios', userId
    When method GET
    Then status 200
    And match response == read('classpath:schemas/userSchema.json')
    And match response._id == userId
    And match response.email == randomEmail

  Scenario: Actualizar usuario existente
    Given path '/usuarios'
    And request newUser
    When method POST
    Then status 201
    * def userId = response._id

    * def updatedUser =
    """
    {
      "nome": "Frank Pozo Updated",
      "email": "#(randomEmail)",
      "password": "654321",
      "administrador": "false"
    }
    """

    Given path '/usuarios', userId
    And request updatedUser
    When method PUT
    Then status 200
    And match response.message == 'Registro alterado com sucesso'

  Scenario: Eliminar usuario existente
    Given path '/usuarios'
    And request newUser
    When method POST
    Then status 201
    * def userId = response._id

    Given path '/usuarios', userId
    When method DELETE
    Then status 200
    And match response.message == 'Registro excluído com sucesso'