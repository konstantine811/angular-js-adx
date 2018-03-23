var commonPageObjects = require('./../common/common.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

var RegisterPage = function() {
  var commonPageControl = new commonPageObjects();
  var pageSkeletonControl = new PageSkeletonPage();

  var firstname = element(by.model('userForm.first_name'));
  var lastname = element(by.model('userForm.last_name'));
  var email = element(by.model('userForm.email'));
  var password = element(by.model('userForm.password'));
  var confirm = element(by.model('userForm.confirm_password'));
  var checkbox = element(by.model('userForm.terms'));
  var submit = element(by.testHook('submit-register'));



  this.register = function(registerObject){
    //this function will wont wait for an angular event that may have happened previously, because of the browser.get()
    //so use it in the 'then' function if you use it after an angular action

    //using browser.driver.get instead of browser.get because browser.get causes javascript error randomly (about 20% of the time) in internet explorer
    return browser.driver.get(browser.baseUrl + '/register').then(function() {

    }).then(function() {
      //so need to logout first if we were logged in and have not logged out
      return pageSkeletonControl.header.logoutButton.isPresent().then(function (isLogoutButtonPresent) {
        if (isLogoutButtonPresent) {
          return pageSkeletonControl.header.logoutButton.click();
        }
        return protractor.promise.fulfilled();
      })
    }).then(function() {
      firstname.clear();
      lastname.clear();
      email.clear();
      password.clear();
      confirm.clear();
      firstname.sendKeys(registerObject.firstName);
      lastname.sendKeys(registerObject.lastName);
      email.sendKeys(registerObject.email);
      password.sendKeys(registerObject.password);
      confirm.sendKeys(registerObject.password);
      checkbox.click();
      return submit.click().then(function() {
        return commonPageControl.tour.endTourIfPresent();
      })
    })
  };

  this.successRegister = element.all(by.css('[ng-if="complete == true"'));
  this.userExist = element.all(by.binding('error'));
};
module.exports = RegisterPage;