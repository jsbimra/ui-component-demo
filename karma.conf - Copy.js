// Karma configuration
// Generated on Thu Oct 08 2015 14:42:19 GMT+0530 (India Standard Time)
module.exports = function(config) {
    config.set( {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath : '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks : ['jasmine'],

        // list of files / patterns to load in the browser
        files : [
            'lib/angular/jquery.js',       
            'lib/angular/bootstrap.js',
            'lib/angular/angular.js',
            'lib/angular/angular-animate.js',
            'lib/angular/angular-mocks.js',
            'lib/angular/angular-resource.js',  
            'lib/angular/angular-sanitize.js',
            'lib/angular/angular-translate.js',
            'lib/angular/angular-translate-loader-static-files.js',
            'lib/angular/angular-ui-router.js',
            'lib/custom-libs/ui-bootstrap-tpls-0.14.2.js',
            'lib/custom-libs/smart-table.js',
            'lib/custom-libs/metisMenu.js',
            'lib/custom-libs/custom.js',
            
            'app/app.js',
            'app/app_language.js',
            'app/app_state.js',   

            'app/**/*.js',
            'test/unit/**/*Spec.js'
        ],

        /* Karma plugin for generating html file of error and logs report */
        // /plugins: ['karma-htmlfile-reporter'],
        reporters: ['progress', 'html'], 
        htmlReporter: {
          outputFile: 'karmaunitresultedited.html',
                
          // Optional 
          pageTitle: 'Unit Tests Results',
          subPageTitle: 'A sample project description'
        },

        // list of files to exclude
        exclude: [
            'app/**/**/locale-en_EN.json'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors : {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters : ['progress'],

        // web server port
        port : 9876,

        // enable / disable colors in the output (reporters and logs)
        colors : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel : config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers : ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun : false
    })
}