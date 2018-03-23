var ProfilePage = require('./profile.pageObject.js');
var PageSkeletonPage = require('./../page-skeleton/page-skeleton.pageObject.js');

describe('profile test', function() {

  var PageSkeletonControl = new PageSkeletonPage();
  var profileControl = new ProfilePage();

  var loginUser = {
    username: 'testUser3@gmail.com',
    password: '12345'
  };

  var updateProfileData = {
    firstProfile: {
      firstName: 'Name',
      lastName: 'Last Name',
      email: 'testUser3@gmail.com',
      selectGender: 'male',
      dateBirth: '1990-03-11',
      phone: '+380984019534'
    },
    updateProfile: {
      firstName: 'Name2',
      lastName: 'Last Name2',
      email: 'testUser3Update@gmail.com',
      selectGender: 'female',
      dateBirth: '1980-05-01',
      phone: '+380984545450'
    }
  };


  it('should be user profile data exists', function() {
    profileControl.profile (loginUser);
    var data = updateProfileData.firstProfile;
    expect(profileControl.profileFirstName.getText()).toContain('First Name: ' + data.firstName);
    expect(profileControl.profileLastName.getText()).toContain('Last Name: ' + data.lastName);
    expect(profileControl.profileEmail.getText()).toContain('Email: ' + data.email);
    expect(profileControl.profileGender.getText()).toContain('Gender: ' + data.selectGender);
    expect(profileControl.profileDateBirth.getText()).toContain('Date of Birth: ' + data.dateBirth);
    expect(profileControl.profilePhone.getText()).toContain('Phone: ' + data.phone);
  });

  it('should be user update profile', function() {
    var data = updateProfileData.updateProfile;
    profileControl.updateProfile(data);
    expect(profileControl.profileFirstName.getText()).toContain('First Name: ' + data.firstName);
    expect(profileControl.profileLastName.getText()).toContain('Last Name: ' + data.lastName);
    expect(profileControl.profileEmail.getText()).toContain('Email: ' + data.email);
    expect(profileControl.profileGender.getText()).toContain('Gender: ' + data.selectGender);
    expect(profileControl.profileDateBirth.getText()).toContain('Date of Birth: ' + data.dateBirth);
    expect(profileControl.profilePhone.getText()).toContain('Phone: ' + data.phone);
  });

  it('should be user restore profile', function() {
    var data = updateProfileData.firstProfile;
    profileControl.updateProfile(data);
    expect(profileControl.profileFirstName.getText()).toContain('First Name: ' + data.firstName);
    expect(profileControl.profileLastName.getText()).toContain('Last Name: ' + data.lastName);
    expect(profileControl.profileEmail.getText()).toContain('Email: ' + data.email);
    expect(profileControl.profileGender.getText()).toContain('Gender: ' + data.selectGender);
    expect(profileControl.profileDateBirth.getText()).toContain('Date of Birth: ' + data.dateBirth);
    expect(profileControl.profilePhone.getText()).toContain('Phone: ' + data.phone);
  });

});