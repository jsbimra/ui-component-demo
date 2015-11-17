(function () {
    'use strict';

    /* FormController - Controller for Form Elements */
    angular.module('uiFrameworkComponent').controller('FormController', function($scope, FormService) {

        /* Initial state of the Dropdown Table */
        $scope.condition = false;
    
        /* Function to toggle the Dropdown Table */
        $scope.showTable = function() {
            $scope.condition = !$scope.condition;
        };
        
        /* Function to get options from FormService */
        FormService.getAllOptions() 
        .then(function (response) { 
            console.log(response); 
            $scope.options = response; 
        }, function(error) {
        //}).catch(function (error) { 
            console.log(error); 
        });
        
        /* Function to get dropdownSelect from FormService */
        FormService.getDropdownSelect() 
        .then(function (response) { 
            console.log(response); 
            $scope.dropdownSelect = response;             
        //})
        //.catch(function (error) { 
        }, function(error) {
            console.log(error);         
        });
        
        /* Function to get tableDropdown from FormService */
        FormService.getTableDropdown()
        .then(function (response) { 
            console.log(response); 
            $scope.tableDropdown = response;            
        //}).catch(function (error) { 
        }, function(error) {     
            console.log(error); 
        });
        
        /* Function to get radioSelect from FormService */
        FormService.getRadioSelect()
        .then(function (response) { 
            console.log(response); 
            $scope.radioSelect = response;             
        //}).catch(function (error) { 
        }, function(error) {
            console.log(error); 
        });
        
        /* Function to get checkboxSelect from FormService */
        FormService.getCheckboxSelect()
        .then(function (response) { 
            console.log(response); 
            $scope.checkboxSelect = response;            
        //}).catch(function (error) { 
        }, function(error) {
            console.log(error); 
        });
    });
    
    /* Date Picker Controller */
    angular.module('uiFrameworkComponent').controller('DatepickerCtrl', function ($scope) {

        /* Function to set the current date */
        $scope.today = function() {
            $scope.dt = new Date();
        };

        /* Call to get the current date */
        $scope.today();

        /* Function to toggle minDate() */
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };

        /* Call to toggleMin() */
        $scope.toggleMin();

        /* Set Max Date */
        $scope.maxDate = new Date(2050, 5, 22);

        /* Function to display the calender */
        $scope.open = function($event) {
            $scope.status.opened = true;
        };

        /* Date Formats */
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        
        /* Set the Date Format */
        $scope.format = $scope.formats[2];

        /* Status of the date widget */
        $scope.status = {
            opened: false
        };

        var tomorrow = new Date();

        tomorrow.setDate(tomorrow.getDate() + 1);

        var afterTomorrow = new Date();

        afterTomorrow.setDate(tomorrow.getDate() + 2);

        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];
    });
    
    /*Time Picker Controller*/
    angular.module('uiFrameworkComponent').controller('TimepickerCtrl', function ($scope, $log) {

        /* To get the current date and time */
        $scope.getTime = new Date();
        
        /* To Set the meridian */
        $scope.ismeridian = true;

        /* To toggle the meridian*/
        $scope.toggleMode = function() {
            $scope.ismeridian = ! $scope.ismeridian;
        };
    });

})();