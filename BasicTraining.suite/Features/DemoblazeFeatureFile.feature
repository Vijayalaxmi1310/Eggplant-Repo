Feature: Add a product to the cart

  Scenario: Add mobile to shopping cart
    Given I launch an application
    When I verify the homepage
    And verify a mobile product
    And click on product
    Then add a product to cart
Then I close the browser

