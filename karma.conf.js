const webpackConfig = require('./webpack/test.config.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-jasmine-html-reporter'),
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            'test/**/*.jsx'
        ],
        preprocessors: {
            'test/**/*.jsx': ['webpack'],
        },
        webpack: webpackConfig,
        coverageReporter: {
            reporters: [
                { type: 'text', subDir: 'text' },
                { type: 'html', subDir: 'html' }
            ],
            dir: 'coverage/'
        },
        reporters: ['progress', 'kjhtml', 'coverage'],
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};