Feature: Entry from (BUDGET) TC-0009
  Scenario: Check that description and amount from budget grid match entry form (outcome)
    Given A user go to 'http://localhost:8000/budget'
    When Description is filled with 'test1'
    When Value is filled with '350.0'
    When The Add button is clicked
    Then Description 'test1' should be displayed in the budget grid
    Then Amount '-$350.00' should be displayed in the budget grid

  Scenario: Check that description and amount from budget grid match entry form (income)
    Given A user go to 'http://localhost:8000/budget'
    When Income category is selected
    When Description is filled with 'test1'
    When Value is filled with '350.0'
    When The Add button is clicked
    Then Description 'test1' should be displayed in the budget grid
    Then Amount '$350.00' should be displayed in the budget grid

  Scenario:Check that description and amount from budget grid match entry form (Failed test)
    Given A user go to 'http://localhost:8000/budget'
    When Income category is selected
    When Description is filled with 'test1'
    When Value is filled with '350.0'
    When The Add button is clicked
    Then Description 'test1' should be displayed in the budget grid
    Then Amount '$3500.00' should be displayed in the budget grid


