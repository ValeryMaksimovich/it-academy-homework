export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).

    user: process.env.BROWSERSTACK_USERNAME || '-',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '-',

    //
    // ==================
    // Specify Test Files
    // ==================

    specs: [],
    suites: {
        smoke:[
            '../../test/specs/suites/smoke.ts',
            ],
        e2e: [
            '',
        ],
        settings: [
            '../../test/specs/suites/settings.ts'
        ]
    },
    //
    // ============
    // Capabilities
    // ============

    capabilities: [],
    //
    // ===================
    // Test Configurations
    // ===================

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "info",

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    baseUrl: '',
    // Default timeout for all waitFor* commands.

    waitforTimeout: 12000,

    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,

    // Default request retries count
    connectionRetryCount: 3,

    // Test runner services
    
    services: [ ],

    // Framework you want to run your specs with.
    framework: "mocha",

    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ["spec"],
    // Options to be passed to Mocha.
    mochaOpts: {
        ui: "bdd",
        timeout: 3 * 60 * 1000, // 3min
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    /**
     * NOTE: No Hooks are used in this project, but feel free to add them if you need them.
     */
};