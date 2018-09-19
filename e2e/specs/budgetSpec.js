const budgetPage = require('../pages/budget_page.js');

Given('A user go to {string}',function(url) {
  return budgetPage.get(url);
});

When('Income category is selected',function() {
  return budgetPage.clickIncomeOption();
});

When('Description is filled with {string}',function(desc) {
  budgetPage.setDescription(desc);
});
When('Value is filled with {string}',function(val) {
  return budgetPage.setValue(val);
});
When('The Add button is clicked',function() {
  return budgetPage.clickAddButton();
});

Then('Description {string} should be displayed in the budget grid',function(desc) {
  return expect(budgetPage.isDescription()).to.eventually.equal(desc);
});

Then('Amount {string} should be displayed in the budget grid',function(value) {
  return expect(budgetPage.isAmount()).to.eventually.equal(value);
});
