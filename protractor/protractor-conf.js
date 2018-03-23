var defaultSpecs = require('./scenario-conf').specs;

var defaultCapabilities = {
  /*
  dev: {

    name: 'dev',
    browserName: 'chrome',
    seleniumVersion: "2.53.1",
    platform: 'Windows 8.1',
    specs: [
      'creating-cases/creating-cases.scenario.js'
    ]
  },*/
  chrome: {
    name: 'ixlayer Chrome',
    browserName : 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    platform: 'Windows 8.1',
    chromeOptions: {
      args: [
        '--start-maximized'
      ]
    }
  },

  headlessChrome: {
    name: 'ixlayer Headless Chrome',
    browserName : 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    platform: 'Windows 8.1',
    chromeOptions: {
      args: [
        "--headless", "--disable-gpu", "--window-size=1280x720"
      ]
    }
  },
  firefox: {
    name: 'ixlayer Firefox',
    browserName: 'firefox',
    shardTestFiles: true,
    maxInstances: 1,
    platform: 'Windows 8.1',
    seleniumVersion: "2.47.1",    //selenium driver needs to be specified for saucelabs to work properly for the different versions of firefox
    version: '40.0'   //firefox webdriver has some issues above this version, so keep this version unless you have verified a newer version
  },
  safari: {
    name: 'ixlayer Safari',
    browserName: 'safari',
    shardTestFiles: true,
    maxInstances: 1,
    version: '8.0',         //test with safari 10 is not working (may need to use selenium driver version 3 or above)
    platform: 'OS X 10.10',
    screenResolution: '1280x720'
    /*platform: 'macOS 10.12',
    screenResolution: '1280x960',*/
  },

  ie: {
    name: 'ixlayer IE',
    browserName: 'internet explorer',
    shardTestFiles: true,
    maxInstances: 1,
    seleniumVersion: "2.53.1",
    platform: 'Windows 8.1'
    /*,
    version: '8.0',
    tags: ['ie']*/
  }
};




exports.config = {
  // ----- How to setup Selenium -----
  //
  // There are three ways to specify how to use Selenium. Specify one of the
  // following:
  //
  // 1. seleniumServerJar - to start Selenium Standalone locally.
  // 2. seleniumAddress - to connect to a Selenium server which is already
  //    running.
  // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

  // The location of the selenium standalone server .jar file.
  // seleniumServerJar: './selenium/selenium-server-standalone-2.37.0.jar',
  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: null,
  // Chromedriver location is used to help the selenium standalone server
  // find chromedriver. This will be passed to the selenium jar as
  // the system property webdriver.chrome.driver. If null, selenium will
  // attempt to find chromedriver using PATH.
  // chromeDriver: './selenium/chromedriver',
  // Additional command line options to pass to selenium. For example,
  // if you need to change the browser timeout, use
  // seleniumArgs: ['-browserTimeout=60'],


  // The address of a running selenium server. If specified, Protractor will
  // connect to an already running instance of selenium. This usually looks like
  // seleniumAddress: 'http://localhost:4444/wd/hub'
  seleniumAddress: 'http://localhost:4444/wd/hub/',

  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 300000,
  getPageTimeout: 300000,
  // ----- Capabilities to be passed to the webdriver instance ----
  //
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of
  rootElement: 'body',

  // A callback function called once protractor is ready and available, and
  // before the specs are executed
  // You can specify a file containing code to run by setting onPrepare to
  // the filename string.
  onPrepare: function() {
    //resize the window to full window
    browser.driver.manage().window().maximize();

   //adding unique locators for our tests
    protractor.By.addLocator ('testHook',function (hook, opt_parentElement){
      var using = opt_parentElement || document;
      return using.querySelector('[test-hook=\'' + hook+ '\']');
    });
    protractor.By.addLocator ('testHookAll',function (hook,opt_parentElement){
      var using = opt_parentElement || document;
      return using.querySelectorAll('[test-hook=\'' + hook+ '\']');
    });
    protractor.By.addLocator('uiSref', function(sref, opt_parentElement){
      var using = opt_parentElement || document;
      return using.querySelector('[ui-sref=\'' + sref+ '\']');
    });

  },
  baseUrl: 'http://localhost:8001',
  // The params object will be passed directly to the protractor instance,
  // and can be accessed from your test. It is an arbitrary object and can
  // contain anything you my need in your test.
  // This can be changed via the command line as:
  //   --params.login.user 'Joe'
  params: {
    login: {
      username: 'testUser3@gmail.com',
      password: '12345'
    }
  },
  framework: 'jasmine2',
  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 600000
  }
};

var setCapability = function(capabilityObject, useSauceLabs) {

  capabilityObject['exclude'] = [];
  //set the specs to run all tests
  if (!capabilityObject['specs']) {
    capabilityObject['specs'] = defaultSpecs;
  }

  if (capabilityObject['browserName'] === 'safari') {
  }
  //sauce labs config:
  if(useSauceLabs) {
    //capabilityObject.shardTestFiles = true; //so every spec will run in a different instance
    if (!capabilityObject["screenResolution"]) {
      capabilityObject["screenResolution"] = "1280x768";
    }
    capabilityObject["maxDuration"] = 6000;
  }

  return capabilityObject;

};

var setMultiCapabilities = function(multiCapabilities, useSauceLabs, selectedCapability) {

  if (selectedCapability && defaultCapabilities[selectedCapability]) {
    multiCapabilities.push(setCapability(defaultCapabilities[selectedCapability], useSauceLabs));
  }
  else {
    multiCapabilities.push(setCapability(defaultCapabilities.chrome, useSauceLabs));
    multiCapabilities.push(setCapability(defaultCapabilities.ie, useSauceLabs));
    multiCapabilities.push(setCapability(defaultCapabilities.firefox, useSauceLabs));
    multiCapabilities.push(setCapability(defaultCapabilities.safari, useSauceLabs));
  }

  var multipleSessionEnabled = multiCapabilities.filter(function(capibility) {
    return capibility.shardTestFiles && (capibility.maxInstances > 1);
  });

  if (!multipleSessionEnabled.length) {
    exports.config.maxSessions = 1; //its important to run the tests sequentially because overlapping tests could fail (due to user login/logout or correlation of test parameters)
  }
};

var runOnSauceLabs = false;
var onlyRun = null;
exports.config.params.exclude = [];

for (var i = 3; i < process.argv.length; i++) {

  if (process.argv[i] === "--saucelabs") {
    runOnSauceLabs = true;
    console.log("Running tests on Sauce Labs!!");
    continue;
  }

  var onlyRunArg = process.argv[i].split("--onlyRun=");
  if (onlyRunArg[1]) {
    onlyRun = onlyRunArg[1];
    console.log("Only running the test: " + onlyRun);
    continue;
  }

  if (process.argv[i].indexOf('--exclude=') === 0) {
    var splitArgument = process.argv[i].split("--exclude=");
    var testsToExclude = splitArgument.slice(1)[0];
    if (testsToExclude) {
      testsToExclude.split(',').forEach(function(excludeTest) {
        exports.config.params.exclude.push(excludeTest);
      });
    }
  }

}

if (runOnSauceLabs) {

  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  exports.config.sauceUser = process.env.SAUCE_USERNAME;
  exports.config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  exports.config.params.remoteFileUpload = true;

  exports.config.multiCapabilities = [];

  setMultiCapabilities(exports.config.multiCapabilities, runOnSauceLabs, onlyRun);
}
else {
  exports.config.params.remoteFileUpload = false;

  //for some reason the driver path for selenium server should be specified, when running the tests on IE, change this path to the path of your IE driver
  //with the 64 bit driver the tests are crazy slow (for IE 11 at least), so use 32 bit driver instead
  exports.config.seleniumArgs = ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer2.53.1.exe'];
  exports.config.multiCapabilities = [];
  setMultiCapabilities(exports.config.multiCapabilities, runOnSauceLabs, onlyRun);
}
