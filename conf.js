exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['tests/*_spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};