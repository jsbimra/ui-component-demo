(function() {
	'use strict';

    /* Directive to display pagination details */
    angular.module('uiFrameworkComponent').directive('stSummary', function() {
        return {
            require : '^stTable',
            link : function(scope, element, attrs, stTable) {
                scope.stRange = {
                    from : null,
                    to : null
                };
                scope.$watchGroup(['currentPage', 'stItemsByPage', 'numPages'],function() {
                    /* Variable to store smart table pagination table state */
                    var pagination = stTable.tableState().pagination;
                    scope.stItemsByPage = scope.stItemsByPage ? +(scope.stItemsByPage) : stConfig.pagination.itemsByPage;
                    scope.stRange.from = pagination.start + 1;
                    scope.stRange.to = scope.currentPage === scope.numPages ? pagination.totalItemCount:(scope.stRange.from+ scope.stItemsByPage - 1);
                });

            }
        };
    });
})();