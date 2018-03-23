var moment = require('moment');
var common = require('./common.js');

var CommonPageObjects = function() {

  var commonPageObjects = this;

  this.dropDown = {

    getButton: function(parentElement) {
      if (parentElement){
        return parentElement.element(by.testHook('dropdown-button'));
      }
      return element(by.testHook('dropdown-button'));
    },
    getOptionByText: function(option){
      var matchedOption = element.all(by.repeater('option in options')).filter(function(elm) {
        return elm.getText().then(function (text) {
          return (text === option);
        });
      });
      return matchedOption.get(0).element(by.tagName('a'));
    },
    clickOptionByText: function(parentElement, option) {
      var dropDownOptionContainer = parentElement.element(by.tagName('ul'));
      var optionElm = commonPageObjects.dropDown.getOptionByText(option);

      //so the option menu could be long and some option not visible without scrolling and in IE we need to see the element to click on it unfortunately
      function scrollToElement() {
        arguments[0].scrollTop = arguments[1].offsetTop;
      }

      return browser.executeScript(scrollToElement, dropDownOptionContainer.getWebElement(), optionElm.getWebElement()).then(function() {
        return optionElm.click();
      });

    }
  };

  this.confirmationModal = {
    closeButton: element(by.testHook('confirmation-close')),
    okButton: element(by.testHook('confirmation-ok'))
  };

  this.searchField = {
    input: element(by.model('searchTerm')),
    results: element.all(by.repeater('item in searchResult')).all(by.binding('item.name'))
  };

  this.footer = {
    saveButton: element(by.testHook('save-button'))
  };

  this.dateInput = {
    setDate: function(date, dateModel) {
      var momentDate = moment(date);
      var month = element(by.model(dateModel)).element(by.model('model.month'));
      var day = element(by.model(dateModel)).element(by.model('model.day'));
      var year = element(by.model(dateModel)).element(by.model('model.year'));

      year.clear();
      month.clear();
      day.clear();

      year.sendKeys(momentDate.format('YYYY'));
      month.sendKeys(momentDate.format('MM'));
      day.sendKeys(momentDate.format('DD'));
    }
  };

  this.tour = {
    endTourIfPresent: function() {

      var popups = element.all(by.testHookAll('tour-start-popover'));

      return popups.then(function(tourPopups) {
        return common.forEach(tourPopups, function (popup) {
          return popup.isDisplayed().then(function(isPopupDisplayed) {
            var popupChecked = element(by.model('checked'));
            var endTourButton = popup.element(by.testHook('tour-end-button'));
            if(isPopupDisplayed) {
              popupChecked.click();
              return endTourButton.click();
            }
            return protractor.promise.fulfilled();
          });
        });
      });
    }
  }
};

module.exports = CommonPageObjects;