const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: ['--test-type'],
    },
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature', // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['specs/*.js'], // require step definition files before executing features
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: false, // <boolean> fail if there are any undefined or pending steps
    format: 'json:.tmp/results.json', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    'dry-run': false, // <boolean> invoke formatters without executing steps
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  // Options for the cucumber html reporter.
  plugins: [
    {
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: false,
        openReportInBrowser: true,
        displayDuration: true,
      },
    },
  ],

  onPrepare: function() {
    browser.waitForAngularEnabled(false); // for non-angular pages
    chai.use(chaiAsPromised);
    global.expect = chai.expect;

    browser
      .manage()
      .window()
      .maximize(); // maximize the browser before executing the feature files
    browser
      .manage()
      .timeouts()
      .implicitlyWait(3000);

    const { Given, Then, When } = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
  },

  allScriptsTimeout: 2000,
};
