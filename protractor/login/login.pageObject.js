/**
 * Created by Balu on 2016.02.25..
 */
var commonPageObjects = require('./../common/common.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

var LoginPage = function() {
    var commonPageControl = new commonPageObjects();
    var pageSkeletonControl = new PageSkeletonPage();

    var username = element(by.model('userForm.email'));
    var password = element(by.model('userForm.password'));
    var loginButton = element(by.testHook("login-button"));

    this.login = function(loginObject){
        //this function will wont wait for an angular event that may have happened previously, because of the browser.get()
        //so use it in the 'then' function if you use it after an angular action

        //using browser.driver.get instead of browser.get because browser.get causes javascript error randomly (about 20% of the time) in internet explorer
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
        });

    };
    this.nonFieldErrors = element.all(by.binding('error.detail'));
};
module.exports = LoginPage;