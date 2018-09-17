const budgetPage = require('../pages/budget_page.js');

Given('a user go to budgeting app', () => {
  budgetPage.init();
  budgetPage.get();
});

When('Description is filled with valid data', () => {
  budgetPage.setDescription('Test 01');
});

When('Value is filled with valid data', () => {
  budgetPage.setValue('300.5');
});

When('the Add button is clicked', () => {
  budgetPage.clickAddButton();
});

Then('a new row with the correct data is displayed at the end on the budget grid', () => {
  expect(budgetPage.getLastValue()).to.eventually.equal('300.5');
});
