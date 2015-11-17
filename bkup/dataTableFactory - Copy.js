(function() {
	'use strict';
    
    /* TableFactory - to get the data in the table */
    angular.module('uiFrameworkComponent').factory('TableFactory', function($http, $resource, $q) {
        
        /* Variables to store an array of data objects retrieved from the server */
        var items , itemResource, displayOptions, displayOptionsResource;
        
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
            getItems : function() {
           
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }     
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/items.json',
                  })
                .then(function successCallback(response) {
                    items = response.data;

                },function errorCallback(response) {
                    console.log('Error...');
                });
                
                /*itemResource = $resource('http://localhost:8080/cors-master/items.json');
                items = itemResource.query();*/
                
                return items;
            },
            
            /* Function to return 'displayOptions' to TableService  */ 
            getDisplayOptions : function() {
           
                if($http.defaults.headers.common && $http.defaults.headers.common.Authorization){
                    delete $http.defaults.headers.common.Authorization;
                }     
                
                $http( { 
                    method: 'GET',
                    url: 'http://localhost:8080/cors-master/displayOptions.json'
                })
                .then(function successCallback(response) {
                    displayOptions = response.data;
                     alert("displayOptions:: "+displayOptions);

                },function errorCallback(response) {
                    console.log('Error...');
                });
                
                /* displayOptionsResource = $resource('http://localhost:8080/cors-master/displayOptions.json');
                displayOptions = displayOptionsResource.query();*/
                
                return displayOptions;
            }    
        };
    });
})();