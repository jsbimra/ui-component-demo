(function() {
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
})();