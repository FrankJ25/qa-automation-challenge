Feature: Compra en Sauce Demo

  Scenario: Compra exitosa
    Given que el usuario abre la aplicación
    When inicia sesión con "standard_user" y "secret_sauce"
    Then debería ver la página de productos
    When agrega el producto "Sauce Labs Backpack"
    And va al carrito
    Then valida el producto "Sauce Labs Backpack"
    When completa la compra con "Frank", "Pozo", "15001"
    Then debería ver confirmación de compra

  Scenario: Login inválido
    Given que el usuario abre la aplicación
    When inicia sesión con "locked_out_user" y "secret_sauce"
    Then debería ver error de login