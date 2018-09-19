const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const cucumber = require('cucumber');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: [
        '--test-type',
        '--no-sandbox',
        '--disable-infobars',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--headless',
      ],
    },
    metadata: {
      browser: {
        name: 'chrome',
        version: '58',
      },
      device: 'MacBook Pro 15',
      platform: {
        name: 'OSX',
        version: '10.12.6',
      },
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
    strict: true, // <boolean> fail if there are any undefined or pending steps
    format: 'json:.tmp/results.json', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
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
        pageTitle: 'Budgeting app tests',
      },
    },
  ],

  onPrepare: function() {
    browser.waitForAngularEnabled(false); // for non-angular pages
    chai.use(chaiAsPromised);

    global.expect = chai.expect;
    global.Given = cucumber.Given;
    global.When = cucumber.When;
    global.Then = cucumber.Then;

    browser
      .manage()
      .window()
      .maximize(); // maximize the browser before executing the feature files
    browser
      .manage()
      .timeouts()
      .implicitlyWait(3000);
  },
  ignoreUncaughtExceptions: true,
};
