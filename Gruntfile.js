var ENV = { APP : './app', LIB : './lib', BUILD : './build', CSS : './styles/css', FONTS : './styles/fonts'};
var COPY = {
    CSS : {
        src : ['*.css'],
        dest : ENV.BUILD+'/css',
        cwd : ENV.CSS,
        expand : true
    },
    FONTS : {
        src : ['*.*'],
        dest : ENV.BUILD+'/fonts',
        cwd : ENV.FONTS,
        expand : true
    },
    HTML : {
        src : ['**/*.html'],
        dest : './build/app/',
        cwd : './app/',
        expand : true
    }
};
var FILES = {
    APP : [ ENV.APP+'/*.js', ENV.APP+'/**/*.js'],
    PROD : [ ENV.APP+'/*.js', ENV.APP+'/**/*.js', '!'+ENV.APP+'/*.local.js', '!'+ENV.APP+'/**/*.local.js'],
    CSS : [ENV.CSS]+'/*.css',
    ANGULAR : [
        ENV.LIB+'/angular/jquery.js',
        ENV.LIB+'/angular/bootstrap.js',
        ENV.LIB+'/angular/angular.js',
        ENV.LIB+'/angular/angular-animate.js',
        ENV.LIB+'/angular/angular-mocks.js',
        ENV.LIB+'/angular/angular-resource.js',  
        ENV.LIB+'/angular/angular-sanitize.js',
        ENV.LIB+'/angular/angular-translate.js',
        ENV.LIB+'/angular/angular-translate-loader-static-files.js',
        ENV.LIB+'/angular/angular-ui-router.js',        
        ENV.LIB+'/custom-libs/ui-bootstrap-tpls-0.14.2.js',
        ENV.LIB+'/custom-libs/smart-table.js',
        ENV.LIB+'/custom-libs/metisMenu.js',
        ENV.LIB+'/custom-libs/custom.js'
    ]
};

/* TASKS : START */
var TASK = {};
TASK.KARMA = {
    options : {
        // point all tasks to karma config file
        configFile :'./karma.conf.js'
    },
    unit : {
        // run tests once instead of continuously
        singleRun: true
    },
    continuous : {
        // keep karma running in the background
        background : true
    }
};
TASK.WATCH = {
    connect : {},
    js : {
        // Verify proper JS then Unit Test
        files : FILES.APP,
        tasks : ['jshint', 'karma'] // note the :run flag
    },
    css : {
        // run these tasks when these files change
    files : FILES.CSS
    }
};
TASK.CLEAN = { src : [ENV.BUILD+"/*"] };
TASK.COPY = {
    production : {
        files : [ COPY.CSS, COPY.FONTS, COPY.HTML ]
    }
};
TASK.UGLIFY = {
    production : {
        files : {
            './build/app/app.min.js' : FILES.PROD,
            './build/lib/lib.min.js' : FILES.ANGULAR
        }
    }
};
TASK.PROCESSHTML = {
    options : {
        data : {}
    },
    dist : {
        files : {
            './build/index.html' : ['./index.html']
        }
    }
};
TASK.CONNECT = {
    server : {
        options : {
            port : 8000,
            hostname : '*'
        }
    }
};
TASK.JSHINT = { 
    all : [ './Gruntfile.js','./app/*.js', './app/**/*.js','./test/**/**/*Spec.js','./test/**/*Spec.js'],
    options : {
        reporter : require('jshint-html-reporter'),
        reporterOutput : 'jshint.html'
    }
    /*files: FILES.APP*/
};
TASK.CONCURRENT = {
    dev : ['watch:js', 'watch:css' ],
    options : {
        logConcurrentOutput : true
    }
};
TASK.CONCAT = {
        options : {
            separator : ';',
        },
        dist : {
            src : [ENV.APP+'/*.js', ENV.APP+'/**/*.js'],
            dest : 'dist/built.js',
        }
};
/* TASKS : END */
module.exports = function(grunt) {
    grunt.initConfig( {
        karma : TASK.KARMA,
        watch : TASK.WATCH,
        clean : TASK.CLEAN,
        copy : TASK.COPY,
        uglify : TASK.UGLIFY,
        processhtml : TASK.PROCESSHTML,
        connect : TASK.CONNECT,
        jshint : TASK.JSHINT,
        concurrent : TASK.CONCURRENT,
        concat : TASK.CONCAT
    });
 
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
  
    grunt.registerTask('default', ['jshint', 'karma:unit']);
    grunt.registerTask('dev', ['connect', 'concurrent:dev']);
    grunt.registerTask('build', ['clean','concat', 'copy', 'uglify', 'processhtml']);
};