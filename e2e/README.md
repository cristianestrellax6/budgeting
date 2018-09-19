# budgeting-app-e2e
Automated tests with Protractor 5.4.1, chai 4.1.2 and cucumber 5.0.1. for budgetting app


Setup  
==========

To run this tests:  

__Prerequisites__:  Clone this repo, install dependencies and start de app:

    git clone git@github.com:cristianestrellax6/budgeting.git
    cd budgeting
    npm install
    npm start
    
__Running the tests__:    
Navigate to e2e folder:

    cd e2e
    
Install project dependencies:
    
    npm install

Start selenium-server and Run tests:
    
    npm run selenium-server
    npm test


Test plan for budgeting app
==========
    
    categories = {
    '1': 'Groceries',
      '2': 'School',
      '3': 'Entertainment',
      '4': 'Utensils',
      '5': 'Kids',
      '6': 'Travel',
      '7': 'Commute',
      '8': 'Insurance',
      '9': 'Clothing',
      '10': 'Car',
      '11': 'Taxes',
      '12': 'Health',
      '13': 'Home',
      '14': 'Beauty',
      '15': 'Income',
      '16': 'Misc',
      '17': 'Gifting'
    }

 Feature: __Entry from__ (BUDGET)
  
      TC-0000:
      @Scenario: Check all default categories are displayed
      Given a user go to budgeting app
      When categories drop-down is clicked 
      Then each {[categories]} values are displayed
      
      TC-0001:
      @Scenario: Check that add button is enabled when no description is added (could be a bug or business decision)
      Given a user go to budgeting app
      When value is added
      Then add button is enabled even if description text-box is empty 
      
      TC-0002:
      @Scenario: Check that add button is disabled when no value is added
      Given a user go to budgeting app
      When description is added
      Then add button is disabled if value text-box is empty 
        
      TC-0003:
      @Scenario: Check that add button is disabled when no description and value are added
      Given a user go to budgeting app
      Then add button is disabled if description and value are empty
               
      TC-0004:
      @Scenario: Check that add button is enabled when description and value are added
      Given a user go to budgeting app
      When description and value are filled with valid data
      Then add button is enabled
               
      TC-0005:
      @Scenario: Check that when Reports tab is clicked stacked Chart is displayed
      Given a user go to budgeting app
      When Reports tab is clicked
      Then stacked chart should be displayed
               
      TC-0006:
      @Scenario: Check that when Spending by category sub-tab is clicked donut chart is displayed
      Given a user go to budgeting app
      When Reports tab is clicked
      When Spending by category sub-tab is clicked
      Then donut chart should be displayed
                     
      TC-0007:
      @Scenario: Check that when inflow vs outflow sub-tab is clicked stacked chart is displayed
      Given a user go to budgeting app
      When Reports tab is clicked
      When Spending by category sub-tab is clicked
      When inflow vs outflow sub-tab is clicked
      Then stacked chart should be displayed   
               
      TC-0008:
      @Scenario: Check that when budget tab is clicked budget grid is displayed
      Given a user go to budgeting app
      When Reports tab is clicked
      When budget tab is clicked 
      Then i should see the budget grid      
      
      TC-0009:
      @Scenario: Check that new row is displayed with the correct data on budget grid
      Given a user go to budgeting app
      When category is selected 
      When Description is filled with valid data 
      When Value is filled with valid data 
      When the Add button is clicked 
      Then a new row with the correct data is displayed at the end on the budget grid       
      
      TC-0010:
      @Scenario: Check that when income category is selected green positive number is displayed 
      Given a user go to budgeting app
      When income category is selected 
      When Description is filled with valid data 
      When Value is filled with valid data 
      When the Add button is clicked 
      Then a new row is displayed with a green positive number value
      
      TC-0011:
      @Scenario: Check that when any outcome category is selected red negative number value is displayed 
      Given a user go to budgeting app
      When no income category is selected 
      When Description is filled with valid data 
      When Value is filled with valid data 
      When the Add button is clicked 
      Then a new row is displayed with a red negative number value 

Feature: __Working balance__ (BUDGET) 

      TC-0012:
      @Scenario: Check that total inflow change when a new income category is added to the budget grid
      Given a user go to budgeting app
      When income category is selected 
      When Description is filled with valid data 
      When Value is filled with valid data 
      When the Add button is clicked 
      Then total inflow should change to the total amount plus the new income value 

      TC-0013:
      @Scenario: Check that total outflow change when a new non-income category is added to the budget grid
      Given a user go to budgeting app
      When non-income category is selected 
      When Description is filled with valid data 
      When Value is filled with valid data 
      When the Add button is clicked 
      Then total outflow should change to the total amount plus the new non-income value 

      TC-0014:
      @Scenario: Check that working balance is the substraction between total inflow - total outflow
      Given a user go to budgeting app
      When non-income category is selected 
      When Description is filled with valid data 
      When Value is filled with valid data 
      When the Add button is clicked 
      Then total outflow should change to the total amount plus the new non-income value 
      
Feature: __Reports__ (inflow vs outflow)
    
      TC-0015:
      @Scenario: Check that inflow and outflow total amount correspond to the budget grid data 
      Given a user go to budgeting app
      When inflow and outflow total amount is set
      When reports tab is clicked
      Then total amount for inflow and outflow should correspond to the budget grid data
      
      TC-0016:
      @Scenario: Check that outflow categories total amount correspond to the budget grid data
      Given a user go to budgeting app
      When each category total amount sum is done 
      When reports tab is clicked
      Then each category should display same total amount as the sum from budget grid data 
            
      TC-0017:
      @Scenario: Check that each category displayed correspond to the budget grid data
      Given a user go to budgeting app
      When some categories are displayed
      When reports tab is clicked
      Then report should show the same categories as budget grid data 
      
Feature: __Reports__ (Spending by category)
      
      TC-0018:
      @Scenario: Check that each category total amount correspond to the budget grid data
      Given a user go to budgeting app
      When each category total amount sum is done from budget grid
      When reports tab is clicked
      When Spending by category is clicked
      Then the sum of each category should correspond to the one on budget grid for each category

      TC-0019:
      @Scenario: Check that each category displayed correspond to the budget grid data
      Given a user go to budgeting app
      When some categories are displayed 
      When reports tab is clicked
      When Spending by category sub-tab is clicked 
      Then report should display the same categories from the budget grid data
