var RegisterPage = require('./registration.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

describe('registration test', function() {

  var PageSkeletonControl = new PageSkeletonPage();
  var registerControl = new RegisterPage();

  var newUser = {
    firstName: 'Name',
    lastName: 'Last Name',
    email: 'testUser5@gmail.com',
    password: '12345'
  };
  it('should be able to reigister user', function() {
    registerControl.register(newUser);
    expect(registerControl.successRegister.count()).toBeGreaterThan(0);
  });

  it('should be user already exists', function() {
    registerControl.register(newUser);
    expect(registerControl.userExist.getText()).toContain('Email already exists');
  });

});