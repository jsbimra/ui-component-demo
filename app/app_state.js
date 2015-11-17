(function () {
    'use strict';

    /* Configurations for angular-ui-router */
    angular.module('uiFrameworkComponent').config(StateConfig);

    StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function StateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('', '/main')
            .when('/', '/main')
            .when('/home', '/main')
            .otherwise('/main/error');

        $stateProvider
            .state('home', {
                url : '',
                views : {
                    'main' : {
                        templateUrl : 'app/main-container/MainContainerTmpl.html'
                    }
                }
            })
            .state('home.main', {
                url : '/main',
                views : {
                    'header' : {
                        templateUrl : 'app/header/HeaderTmpl.html'
                    },
                    'sub-container' : {
                        templateUrl : 'app/sub-container/SubContainerTmpl.html'
                    }
                }
            })

            .state('home.main.datatable', {
                url : '/datatable',
                views : {
                    'content' : {
                        templateUrl : 'app/data-table/data_table.html',
                        controller : 'TableController'
                    }
                }
            })
            .state('home.main.form', {
                url : '/form',
                views : {
                    'content' : {
                        templateUrl : 'app/form-components/form_fields.html',
                        controller : 'FormController'
                    }
                }
            })
            .state('home.main.loader', {
                url : '/loader',
                views : {
                    'content' : {
                        templateUrl : 'app/loader/loaderTmpl.html'
                    }
                }
            })
            .state('home.main.massUpload', {
                url : '/massUpload',
                views : {
                    'content' : {
                        templateUrl : 'app/mass-upload/mass-upload.html'
                    }
                }
            })
            .state('home.main.error', {
                url : '/error',
                views : {
                    'content' : {
                        templateUrl : 'app/generic-error-page/generic_error_page.html'
                    }
                }
            });
    }  
})();