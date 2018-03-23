var commonPageObjects = require('./../common/common.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

var ProfilePage = function() {
  var commonPageControl = new commonPageObjects();
  var pageSkeletonControl = new PageSkeletonPage();

  var username = element(by.model('userForm.email'));
  var password = element(by.model('userForm.password'));
  var loginButton = element(by.testHook("login-button"));
  var firstName = element(by.model('profile.user.first_name'));
  var lastName = element(by.model('profile.user.last_name'));
  var email = element(by.model('profile.user.email'));
  var selectGender = element(by.model('profile.gender'));
  var dateBirth = element(by.model('profile.date_of_birth'));
  var phone = element(by.model('profile.phone'));
  var updateButton = element(by.testHook('update-profile'));

  this.profile = function(loginObject){

    return browser.driver.get(browser.baseUrl + '/login').then(function() {

    }).then(function() {
      //so need to logout first if we were logged in and have not logged out
      return pageSkeletonControl.header.logoutButton.isPresent().then(function (isLogoutButtonPresent) {
        if (isLogoutButtonPresent) {
          return pageSkeletonControl.header.logoutButton.click();
        }
        return protractor.promise.fulfilled();
      })
    }).then(function() {
      username.clear();
      password.clear();
      username.sendKeys(loginObject.username);
      password.sendKeys(loginObject.password);
      loginButton.click();
    }).then(function() {
      pageSkeletonControl.menu.profileButton.click();
    })

  };

  this.updateProfile = function(updateData) {
      pageSkeletonControl.menu.profileButton.click();
      element(by.uiSref('profileEdit')).click().then(function() {
        firstName.clear();
        lastName.clear();
        email.clear();
        dateBirth.clear();
        phone.clear();
        firstName.sendKeys(updateData.firstName);
        lastName.sendKeys(updateData.lastName);
        email.sendKeys(updateData.email);
        selectGender.$('[value=' + updateData.selectGender).click();
        dateBirth.sendKeys(updateData.dateBirth);
        phone.sendKeys(updateData.phone);
        updateButton.click();
      });
  };

  this.profileFirstName = element.all(by.binding('profile.user.first_name'));
  this.profileLastName = element.all(by.binding('profile.user.last_name'));
  this.profileEmail = element.all(by.binding('profile.user.email'));
  this.profileGender = element.all(by.binding('profile.gender'));
  this.profileDateBirth = element.all(by.binding('profile.date_of_birth'));
  this.profilePhone = element.all(by.binding('profile.phone'));
};
module.exports = ProfilePage;