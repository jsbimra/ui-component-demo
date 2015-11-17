(function() {
	'use strict';
    
    /* FormService - to retrieve the 'items' from the FormFactory */
    angular.module('uiFrameworkComponent').service('FormService',function(FormFactory){

        /* Function to return the 'options' to the FormController */
        this.getAllOptions=function(){
            return FormFactory.getOptions();
        };
        
        /* Function to return the 'dropdownselect' to the FormController */
        this.getDropdownSelect=function(){
            return FormFactory.getDropdownSelect();
        };

        /* Function to return the 'tabledropdown' to the FormController */
        this.getTableDropdown=function(){
            return FormFactory.getTableDropDown();
        };

        /* Function to return the 'radioselect' to the FormController */
        this.getRadioSelect=function(){
            return FormFactory.getRadioSelect();
        };

        /* Function to return the 'checkboxselect' to the FormController */
        this.getCheckboxSelect=function(){
            return FormFactory.getCheckboxSelect();
        };
    });
})();