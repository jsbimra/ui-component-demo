(function() {
	'use strict';

    /* TableController - Controller for the data table */
    angular.module('uiFrameworkComponent')
    
    .controller("TableController", ["$state", "$stateParams", "$scope", "TableService", "$filter", "stConfig", TableController])
    
    .controller("TablePagerController", ["$scope", "TableService", "stConfig", TablePagerController]);

    function TableController($state, $stateParams, $scope, TableService, $filter, stConfig) {
            
        /* Declare everything below vm */
        var vm  = this;

        /*Function to get 'items' from TableService */
        TableService.getItems() 
        .then(function (response) { 

            $scope.items = response; 
            $scope.rowCollectionsItems = angular.copy($scope.items);

        }).catch(function (error) { 
            console.log(error); 
        });

        /* Update itemsByPage value on recieve of updateItemsByPageValue */
        $scope.$on('updateItemsByPageValue',function(event,data){
            if(data !== undefined){
                vm.itemsByPage = data;
            }
        });
    }

    function TablePagerController($scope, TableService, stConfig){

        /* Declare everything below vm */
        var vm  = this;

        vm.displaySelection = stConfig.pagination.itemsByPage;

        vm.updateDropdown = updateDropdown;

        /*Call to updateDropDown */
        updateDropdown();

        /*Function to get 'displayOptions' from TableService */
        TableService.getDisplayOptions() 
        .then(function (response) { 

            vm.displayOptions = response !== undefined ? response : [];
            //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)                
        }).catch(function (error) { 
            console.log(error); 
        });

        function updateDropdown(){
            $scope.$emit('updateItemsByPageValue', vm.displaySelection);
        }
    }
})();