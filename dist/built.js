angular.module('uiFrameworkComponent', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'smart-table', 'pascalprecht.translate', 'ui.router', 'ngResource'])

    .config(function($httpProvider, stConfig) {
    
        /* Enable cross domain calls */
        $httpProvider.defaults.useXDomain = true;
    
        /* Overide the default stConfig of Smart Table */
        stConfig.pagination.itemsByPage = 25;
});;(function () {
    'use strict';

    /* Configurations for translate functionality */
    angular.module('uiFrameworkComponent').config(LangConfig);

    LangConfig.$inject = ['$translateProvider'];
      
    /* Function for translate functionality */
    function LangConfig($translateProvider) {

        /* Set the location of locale files */
        $translateProvider.useStaticFilesLoader( {
            prefix : 'assets/locale/locale-',
            suffix : '.json'
        });

        /* Set the preferred Language */
        $translateProvider.preferredLanguage('en_EN');
    }
})();;(function () {
    'use strict';

    /* Configurations for angular-ui-router */
    angular.module('uiFrameworkComponent').config(StateConfig);

    StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function StateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('', '/main')
            .when('/', '/main')
            .when('/home', '/main')
            .otherwise('/main/error');

        $stateProvider
            .state('home', {
                url : '',
                views : {
                    'main' : {
                        templateUrl : 'app/main-container/MainContainerTmpl.html'
                    }
                }
            })
            .state('home.main', {
                url : '/main',
                views : {
                    'header' : {
                        templateUrl : 'app/header/HeaderTmpl.html'
                    },
                    'sub-container' : {
                        templateUrl : 'app/sub-container/SubContainerTmpl.html'
                    }
                }
            })

            .state('home.main.datatable', {
                url : '/datatable',
                views : {
                    'content' : {
                        templateUrl : '/app/data-table/data_table.html',
                        controller : 'TableController'
                    }
                }
            })
            .state('home.main.form', {
                url : '/form',
                views : {
                    'content' : {
                        templateUrl : '/app/form-components/form_fields.html',
                        controller : 'FormController'
                    }
                }
            })
            .state('home.main.loader', {
                url : '/loader',
                views : {
                    'content' : {
                        templateUrl : '/app/loader/loaderTmpl.html'
                    }
                }
            })
            .state('home.main.massUpload', {
                url : '/massUpload',
                views : {
                    'content' : {
                        templateUrl : '/app/mass-upload/mass-upload.html'
                    }
                }
            })
            .state('home.main.error', {
                url : '/error',
                views : {
                    'content' : {
                        templateUrl : '/app/generic-error-page/generic_error_page.html'
                    }
                }
            });
    }  
})();;(function() {
    'use strict';
    
    /* TableFactory - to get the data in the table */
    angular.module('uiFrameworkComponent').factory('TableFactory', function($http, $q) {
        
        /* Variables to store an array of data objects retrieved from the server */
        var items , displayOptions;
                
        var deffered = $q.defer();
        
        /* Variable to store an array of 'item' objects */
        /* var items = [
            { 
                "itemId" : 1,
                "name" : "Birthday Card",
                "description" : "Greeting Cards",
                "dept" : "paperwork",
                "category" : "cards",
                "country" : "USA"
            },
            {
                "itemId" : 2,
                "name" : "Teddy Bear",
                "description" : "Soft Toys",
                "dept" : "gift",
                "category" : "toy",
                "country" : "UK"
            },
            {
                "itemId" : 3,
                "name" : "E-Card",
                "description" : "E-Greetings",
                "dept" : "epurchase",
                "category" : "e-items",
                "country" : "IND"
            },
            {
                "itemId" : 4,
                "name" : "Keychain",
                "description" : "Keychain",
                "dept" : "gift",
                "category" : "keychain",
                "country" : "FRA"
            },
            {
                "itemId" : 5,
                "name" : "Bookmark",
                "description" : "Bookmark",
                "dept" : "stationary",
                "category" : "bookmark",
                "country" : "CH"
            },
            {
                "itemId" : 6,
                "name" : "Cup",
                "description" : "Cup",
                "dept" : "gifts",
                "category" : "cup",
                "country" : "DXB"
            },
            {
                "itemId" : 7,
                "name" : "Pen",
                "description" : "Pen",
                "dept" : "stationary",
                "category" : "pen",
                "country" : "GER"
            },
            {
                "itemId" : 8,
                "name" : "Journal",
                "description" : "Journal",
                "dept" : "paperwork",
                "category" : "journal",
                "country" : "USA"
            },
            {
                "itemId" : 9,
                "name" : "Momento",
                "description" : "Momento",
                "dept" : "gift",
                "category" : "momento",
                "country" : "PAK"
            },
            {
                "itemId" : 10,
                "name" : "Get-Well-Soon Cards",
                "description" : "Greeting Cards",
                "dept" : "paperwork",
                "category" : "cards",
                "country" : "NOR"
            },
            {
                "itemId" : 11,
                "name" : "Anniversary Cards",
                "description" : "Greeting Cards",
                "dept" : "paperwork",
                "category" : "cards",
                "country" : "SPA"
            },
            {
                "itemId" : 12,
                "name" : "Farewell Cards",
                "description" : "Greeting Cards",
                "dept" : "paperwork",
                "category" : "cards",
                "country" : "USA"
            },
            {
                "itemId" : 13,
                "name" : "Toy",
                "description" : "Soft Toys",
                "dept" : "gift",
                "category" : "toy",
                "country" : "UK"
            },
            {
                "itemId" : 14,
                "name" : "Board Games",
                "description" : "Toys",
                "dept" : "gift",
                "category" : "toy",
                "country" : "IND"
            },
            {
                "itemId" : 15,
                "name" : "Dolls",
                "description" : "Dress Up Toys",
                "dept" : "gift",
                "category" : "toy",
                "country" : "FRA"
            },
            {
                "itemId" : 16,
                "name" : "Markers",
                "description" : "Board Markers",
                "dept" : "stationary",
                "category" : "craft",
                "country" : "PAK"
            },
            {
                "itemId" : 17,
                "name" : "Shirts",
                "description" : "Complimentary Items",
                "dept" : "gift",
                "category" : "momento",
                "country" : "NOR"
            },
            {
                "itemId" : 18,
                "name" : "Caps",
                "description" : "Complimentary Items",
                "dept" : "gift",
                "category" : "momento",
                "country" : "CH"
            },
            {
                "itemId" : 19,
                "name" : "Bags",
                "description" : "Complimentary Items",
                "dept" : "gift",
                "category" : "momento",
                "country" : "GER"
            },
            {
                "itemId" : 20,
                "name" : "Streamers",
                "description" : "Party Products",
                "dept" : "epurchase",
                "category" : "e-items",
                "country" : "FRA"
            },
            {
                "itemId" : 21,
                "name" : "Paper Cups",
                "description" : "Party Products",
                "dept" : "epurchase",
                "category" : "e-items",
                "country" : "AUS"
            },
            {
                "itemId" : 22,
                "name" : "Paper Plates",
                "description" : "Party Products",
                "dept" : "epurchase",
                "category" : "e-items",
                "country" : "GER"
            },
            {
                "itemId" : 23,
                "name" : "Candles",
                "description" : "Party Products",
                "dept" : "gift",
                "category" : "e-items",
                "country" : "SPA"
            },
            {
                "itemId" : 24,
                "name" : "Crayons",
                "description" : "Crayons For KIDs",
                "dept" : "stationary",
                "category" : "toy",
                "country" : "UK"
            },
            {
                "itemId" : 25,
                "name" : "Sketchpens",
                "description" : "Sketchpens For KIDs",
                "dept" : "stationary",
                "category" : "toy",
                "country" : "UK"
            },
            {
                "itemId" : 26,
                "name" : "Clay",
                "description" : "Sketchpens For KIDs",
                "dept" : "stationary",
                "category" : "toy",
                "country" : "UK"
            },
            {
                "itemId" : 27,
                "name" : "Erasers",
                "description" : "Erasers For KIDs",
                "dept" : "stationary",
                "category" : "toy",
                "country" : "PAK"
            },
            {
                "itemId" : 28,
                "name" : "PhotoFrames",
                "description" : "PhotoFrames",
                "dept" : "accessories",
                "category" : "momento",
                "country" : "PAK"
            },
            {
                "itemId":29,
                "name" : "Flower Holders",
                "description" : "Flower Holders",
                "dept" : "accessories",
                "category" : "momento",
                "country" : "IND"
            },
            {
                "itemId" : 30,
                "name" : "Accessories",
                "description" : "Accessories",
                "dept" : "accessories",
                "category" : "momento",
                "country" : "IND"
            }
        ];*/
        
        /* Variable to store displayOptions */
        /* var displayOptions = [
            { 'option':'10' },
            { 'option':'15' },
            { 'option':'25' },
            { 'option':'50' }
        ]; */
        
        return {
        
            /* Function to return 'items' to TableService  */ 
            getItems : function () { 
                
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }
                
                var deferred = $q.defer();
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/items.json',
                })
                .success(function (data) { 
                    console.log("Sucess getItems"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject); 
                
                return deferred.promise; 
            },
            
            /* Function to return 'displayOptions' to TableService  */ 
            getDisplayOptions : function() {
           
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }     
                              
                var deferred = $q.defer();
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/displayOptions.json',
                })
                .success(function (data) { 
                    console.log("Sucess displayOptions"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject);
                
                return deferred.promise; 
            }   
        };
    });
})();;(function() {
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
})();;(function() {
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
})();;(function() {
    'use strict';

    /* Directive to Select Page */
    angular.module('uiFrameworkComponent').directive('pageSelect', function() {
        return {
            restrict : 'E',
            template : '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
            link : function(scope, element, attrs) {
                scope.$watch('currentPage', function(c) {
                    scope.inputPage = c;
                });
            }
        };
    });
})();;(function() {
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
})();;(function() {
	'use strict';
    
    /* FormFactory - to get the data for the form fields */
    angular.module('uiFrameworkComponent').factory("FormFactory",function($http, $q) {
        
        /* Variables to store an array of data objects retrieved from the server*/
        var options, dropdownSelect,  tableDropdown,  radioSelect,  checkboxSelect;

        /* Variable to store an array of 'option' objects */
        /* var options = [ 
            { "option" : "Option 1" },
            { "option" : "Option 2" },
            { "option" : "Option 3" },
            { "option" : "Option 4" },
            { "option" : "Option 5" }
        ];*/

        /* Variable to store an array of 'dropdownSelect' objects */
        /*var dropdownSelect = [
            { "select" : "01 | Select 1" },
            { "select" : "02 | Select 2" },
            { "select" : "03 | Select 3" },
            { "select" : "04 | Select 4" },
            { "select" : "05 | Select 5" }
        ];*/

        /* Variable to store an array of 'tableDropdown' objects */
        /*var tableDropdown = [
            {  
                "code" : "01",
                "description" : "Description 1"
            },{
                "code" : "02",
                "description" : "Description 2" 
            },{
                "code" : "03",
                "description" : "Description 3"
            },{
                "code" : "04",
                "description" : "Description 4"
            },{
                "code" : "05",
                "description" : "Description 5"	
            }
        ];*/

        /* Variable to store an array of 'radioSelect' objects */
        /*var radioSelect = [
            { "radio" : "Option 1" },
            { "radio" : "Option 2"}
        ];*/

        /* Variable to store an array of 'checkboxSelect' objects */
        /*var checkboxSelect = [ 
            { "checkbox" : "Option 1" },
            { "checkbox" : "Option 2" }
        ];*/

        /* Returns form data to FormService  */ 
        return {
            
            /* Function to return 'options' to FormService  */ 
            getOptions : function () { 
                
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }
                
                var deferred = $q.defer(); 
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/options.json'
                })
                . success(function (data) { 
                    console.log("Success getOptions"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject); 
                
                return deferred.promise; 
            },
            
            /* Function to return 'dropdownSelect' to FormService  */ 
            getDropdownSelect : function () { 
                
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }
                
                var deferred = $q.defer(); 
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/dropdownSelect.json'
                }) 
                .success(function (data) { 
                    console.log("Success getDropdownSelect"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject); 
                
                return deferred.promise; 
            },
            
            /* Function to return 'dropdownSelect' to FormService  */ 
            getTableDropDown : function () { 
            
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }
                
                var deferred = $q.defer(); 
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/tableDropdown.json'
                })
                .success(function (data) { 
                    console.log("Success getTableDropDown"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject); 
                
                return deferred.promise; 
            },        


            /* Function to return 'radioSelect' to FormService  */ 
            getRadioSelect : function () { 
                
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }
                
                var deferred = $q.defer(); 
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/radioSelect.json'
                })
                .success(function (data) { 
                    console.log("Success getRadioSelect"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject); 
                    return deferred.promise; 
            },         
          
            /* Function to return 'checkboxSelect' to FormService  */ 
            getCheckboxSelect : function () { 
                
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }
                
                var deferred = $q.defer(); 
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/checkboxSelect.json'
                }) 
                .success(function (data) { 
                    console.log("Success getCheckboxSelect"); 
                    deferred.resolve(data); 
                })
                .error(deferred.reject); 
                
                return deferred.promise; 
            }
        };        
    });
})();;(function() {
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
})();;(function () {
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
                    
        }).catch(function (error) { 
            console.log(error); 
        });
        
        /* Function to get dropdownSelect from FormService */
        FormService.getDropdownSelect() 
        .then(function (response) { 
            console.log(response); 
            $scope.dropdownSelect = response;             
        })
        .catch(function (error) { 
            console.log(error); 
        });
        
        /* Function to get tableDropdown from FormService */
        FormService.getTableDropdown()
        .then(function (response) { 
            console.log(response); 
            $scope.tableDropdown = response;            
        }).catch(function (error) { 
            console.log(error); 
        });
        
        /* Function to get radioSelect from FormService */
        FormService.getRadioSelect()
        .then(function (response) { 
            console.log(response); 
            $scope.radioSelect = response;             
        }).catch(function (error) { 
            console.log(error); 
        });
        
        /* Function to get checkboxSelect from FormService */
        FormService.getCheckboxSelect()
        .then(function (response) { 
            console.log(response); 
            $scope.checkboxSelect = response;            
        }).catch(function (error) { 
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

})();;(function () {
    'use strict';
    
    /* LocalizationController - Controller for translate functionality */
    angular.module('uiFrameworkComponent').controller('LocalizationController', LocalizationViewModel);
    
    LocalizationViewModel.$inject = ['$scope', '$translate', '$timeout', '$translateSanitization', '$sanitize'];
    
    function LocalizationViewModel($scope, $translate, $timeout, $translateSanitization, $sanitize) {
        $translateSanitization.useStrategy('escape');
    }
})();