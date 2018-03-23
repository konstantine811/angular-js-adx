var LoginPage = require('./login.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

describe('login test', function() {

    var PageSkeletonControl = new PageSkeletonPage();
    var loginControl = new LoginPage();

    var falseLogin = {
        username: 'test@gmail.com',
        password: '12345'
    };
    it('should be able to login', function() {
        loginControl.login(browser.params.login);

        browser.driver.wait(function() {
          return browser.driver.getCurrentUrl().then(function(url) {
              return (url.indexOf('home') > -1);
          });
        }, 80000);
        //Jasmine expect statement : compare actual and expected value
        expect(browser.getCurrentUrl()).toContain('/home');
        PageSkeletonControl.header.logoutButton.click();
    });
    it ('should get an error during login', function(){
        loginControl.login(falseLogin);
        expect(loginControl.nonFieldErrors.count()).toBeGreaterThan(0);
    });

  });
