  angular.module('uiFrameworkComponent').run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);


(function() {
	'use strict';

  
    /* TableController - Controller for the data table */
    angular.module('uiFrameworkComponent').controller('TableController', function($scope,TableService, $filter) {

        /* Variable to store 'this' */
        var viewModel  = this;

        /* Declare the array for the selected items */
        viewModel.selected = [];

        /* Function to get data for all selected items */
        viewModel.selectAll = function (collection) {

            /* if there are no items in the 'selected' array, push all elements to 'selected' */
            if (viewModel.selected.length === 0) {
                    angular.forEach(collection, function(val) { 
                    viewModel.selected.push(val.id); 
                });
            }

            /* if there are items in the 'selected' array, add only those that ar not */
            else if (viewModel.selected.length > 0 && viewModel.selected.length != $scope.items.length){
                angular.forEach(collection, function(val) {
                    var found = viewModel.selected.indexOf(val.id);
                    if(found == -1) viewModel.selected.push(val.id);
                }); 
            }

            /*Otherwise, remove all items*/
            else {  
                viewModel.selected = [];  
            }
        };

        /* Function to get data by selecting a single row */
        viewModel.select = function(id) {
            var found = viewModel.selected.indexOf(id);
            if(found == -1) viewModel.selected.push(id);
            else viewModel.selected.splice(found, 1);
        }; 
        
        /* Function to get 'items' from TableService */
        $scope.items = TableService.getItems();
        
        
        /* Function to get 'displayOptions' from TableService */
        $scope.displayOptions = TableService.getDisplayOptions() !== undefined ? TableService.getDisplayOptions() : [];

        console.log($scope.displayOptions);

        /* Updating itemsByPage model with first diplayOption first value */
        $scope.itemsByPage = $scope.displayOptions.length != 0 ? $scope.displayOptions[0].option : '';

        console.log($scope.itemsByPage);

        //alert("displayOptions in View Model:: " +$scope.displayOptions);
    
    });
})();