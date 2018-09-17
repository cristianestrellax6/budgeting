Feature: Entry from (BUDGET) TC-0009
  Scenario: Check that new row is displayed with the correct data on budget grid
    Given a user go to budgeting app
    When Description is filled with valid data
    When Value is filled with valid data
    When the Add button is clicked
    Then a new row with the correct data is displayed at the end on the budget grid

