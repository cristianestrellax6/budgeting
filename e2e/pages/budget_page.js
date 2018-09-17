let categories,description,value,income,addButton,budgetGrid;

module.exports = {

  init:()=>{
    description = element(by.name('description'));
    value       = element(by.name('value'));
    income      = element(by.cssContainingText('option','Income'));
    addButton   = element(by.css("form button"));
    budgetGrid  = $$('.components-BudgetGridRow-style__cellContent');
  },

  get: ()=> {
    browser.get('http://localhost:8000/budget');
  },

  setDescription: (desc)=> {
    description.sendKeys(desc);
  },

  setValue:(numberValue)=> {
    value.sendKeys(numberValue);
  },

  clickAddButton: ()=>{
    addButton.submit();
  },

  getLastValue: ()=>{
    return budgetGrid.last().getText().then(function (text) {
      return text;
    });
  },

  setIncomeCategory:()=>{
    income.click();
  }

};
