const BudgetPage = function() {
  this.description = element(by.name('description'));
  this.value = element(by.name('value'));
  this.addButton = element(by.css('form button'));
  this.budgetGrid = $$('.components-BudgetGridRow-style__cellContent');
  this.incomeOption = element(by.cssContainingText('option', 'Income'));

  this.clickIncomeOption = function() {
    this.incomeOption.click();
  };

  this.setDescription = function(desc) {
    this.description.sendKeys(desc);
  };

  this.setValue = function(val) {
    this.value.sendKeys(val);
  };

  this.clickAddButton = function() {
    this.addButton.click();
  };

  this.isDescription = function() {
    return this.budgetGrid
      .get(this.budgetGrid.count().then(count => count - 2))
      .getText()
      .then(text => text);
  };

  this.isAmount = function() {
    return this.budgetGrid
      .get(this.budgetGrid.count().then(count => count - 1))
      .getText()
      .then(text => text);
  };

  this.get = function(url) {
    browser.get(url);
  };
};
module.exports = new BudgetPage();
