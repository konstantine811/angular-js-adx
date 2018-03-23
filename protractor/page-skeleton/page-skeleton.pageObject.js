
var PageSkeletonPage = function() {

/*
    this.toThreadsButton = element(by.testHook('threads-link'));
    this.logoutButton = element(by.testHook('logout-button'));
    this.manageUsersButton = element(by.testHook('manage-users'));
    this.presentingCasesButton = element(by.testHook('presenting'));
    */
    this.menu = {
        homeButton : element(by.uiSref('home')),
        aboutButton : element(by.uiSref('about')),
        productsButton : element(by.uiSref('products')),
        profileButton : element(by.uiSref('profile')),
        dashboardButton: element(by.uiSref('dashboard')),
        registerButton : element(by.uiSref('register')),
        loginButton : element(by.testHook('login-button'))
    };
    this.header = {
        threadsButton : element(by.testHook('threads-link')),
        logoutButton : element(by.testHook('logout-button'))
    };

};
module.exports = PageSkeletonPage;