angular.module('uiFrameworkComponent', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'smart-table', 'pascalprecht.translate', 'ui.router', 'ngResource'])

    .config(function($httpProvider, stConfig) {
    
        /* Enable cross domain calls */
        $httpProvider.defaults.useXDomain = true;
    
        /* Overide the default stConfig of Smart Table */
        stConfig.pagination.itemsByPage = 25;
});