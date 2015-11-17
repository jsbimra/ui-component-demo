(function() {
    'use strict';

    /* TableService - to retrieve the 'items' from the TableFactory */
    angular.module('uiFrameworkComponent').service('TableService', function(TableFactory) {

        /* Function to return the 'items' to the TableController */
        this.getItems = function() {  
            return TableFactory.getItems();
        };
        
        /* Function to return the 'displayOptions' to the TableController */
        this.getDisplayOptions = function() {  
            return TableFactory.getDisplayOptions();
        };
    });
})();