(function () {
    'use strict';

    /* Configurations for translate functionality */
    angular.module('uiFrameworkComponent').config(LangConfig);

    LangConfig.$inject = ['$translateProvider'];
      
    /* Function for translate functionality */
    function LangConfig($translateProvider) {

        /* Set the location of locale files */
        $translateProvider.useStaticFilesLoader( {
            prefix : 'assets/locale/locale-',
            suffix : '.json'
        });

        /* Set the preferred Language */
        $translateProvider.preferredLanguage('en_EN');
    }
})();