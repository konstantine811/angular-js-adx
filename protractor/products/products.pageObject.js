var commonPageObjects = require('./../common/common.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

var ProductsPage = function() {
  var commonPageControl = new commonPageObjects();
  var pageSkeletonControl = new PageSkeletonPage();


  this.products = function() {
    return browser.driver.get(browser.baseUrl).then(function() {
      pageSkeletonControl.menu.productsButton.click();
    });
  };

  this.productsInfo = element.all(by.repeater('product in products'));
};
module.exports = ProductsPage;