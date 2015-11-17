/*(function() {
	'use strict';
    
     //Directive to toggle the Left Navigation 
    angular.module('uiFrameworkComponent').directive('sidebarDirective', function() {
            return {
                link : function(scope, element, attr) {
                    scope.$watch(attr.sidebarDirective, function(newVal) {
                        if (newVal) {
                            element.addClass('show');
                            return;
                        }
                        element.removeClass('show');
                    });
                }
            };
        });
}());*/