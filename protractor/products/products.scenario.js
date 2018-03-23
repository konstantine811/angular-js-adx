var ProductsPage = require('./products.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

describe('products test', function() {

  var PageSkeletonControl = new PageSkeletonPage();
  var productControl = new ProductsPage();

  it('should be products info detail', function() {
    productControl.products();
    expect(productControl.productsInfo.count()).toBeGreaterThan(0);
  });


});