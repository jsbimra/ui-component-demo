(function() {
    'use strict';
    
    /* SidebarController - Controller for the Sidebar */
    angular.module('uiFrameworkComponent').controller('SidebarController', function($scope) {
        
        /* Initial state of the Sidebar */
	    $scope.state = true;
        
        /* Function to toggle the Sidebar */
        $scope.toggleState = function() {
		    $scope.state = !$scope.state;
		};
	});
}());

