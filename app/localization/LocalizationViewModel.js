(function () {
    'use strict';
    
    /* LocalizationController - Controller for translate functionality */
    angular.module('uiFrameworkComponent').controller('LocalizationController', LocalizationViewModel);
    
    LocalizationViewModel.$inject = ['$scope', '$translate', '$timeout', '$translateSanitization', '$sanitize'];
    
    function LocalizationViewModel($scope, $translate, $timeout, $translateSanitization, $sanitize) {
        $translateSanitization.useStrategy('escape');
    }
})();