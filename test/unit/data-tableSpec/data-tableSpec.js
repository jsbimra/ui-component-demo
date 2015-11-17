describe('Table Components',function(){

    var que, rootScope, httpBackend, tableController, scope, TableService, deferred;
    
    // Load the uiFrameworkComponent module
    beforeEach(function(){

        module('uiFrameworkComponent');

        module(function($provide) {
        /*
            $provide.value('TableService', {
                getItems : function () { 
                    return { 
                        then: function (){ 
                            return [{itemId:1,name:"Birthday Card",description:"Greeting Cards",dept:"paperwork",category:"cards",country:"USA"}]; 
                        } 
                    };
                }
            });*/
            
            //getDisplayOptions : function () { return "displayOptions"; }
            //spyOn(TableService, "getItems").and.callThrough();
            //spyOn(TableService, "getDisplayOptions").and.callThrough();
            //$provide.value("TableService", TableService);
            
          //  return null;
        });
    });
  
    beforeEach(function() {
        inject(function ($q, $rootScope, $controller, $httpBackend, _TableService_) {
            
            que = $q;

            rootScope = $rootScope;

            scope = rootScope.$new();
            
            tableController = $controller('TableController',{'$scope' : scope});
            
            // inject your service for testing.
            // The _underscores_ are a convenience thing
            // so you can have your variable name be the
            // same as your injected service.
            TableService = _TableService_;

            httpBackend = $httpBackend;

        });

    });
    

    /* 
    ***************** This code gives error of :
    Error: Injector already created, can not register a module! at workFn
    if we are using inject above
    Provide service to fetch the other custom service created */
    
    

    // check to see if it has the expected function
    it('should have an getItems method', function () { 
        expect(angular.isFunction(TableService.getItems)).toBe(true);
    });
    it('should have an getDisplayOptions method', function () { 
        expect(angular.isFunction(TableService.getDisplayOptions)).toBe(true);
    });

    
    /*it('should return itemsByPage value', function () {
        //dump(tableController);
        expect(scope.itemsByPage).toEqual(25);
    });*/

   it('Get all the items', function () {
        expect(scope.items).not.toBe(null);
        //expect(scope.items).toBeDefined();
        
    });
});

describe('TableService', function () {
    
    var itemsMock;
    
    beforeEach(module('uiFrameworkComponent'));
    
    beforeEach(function () {
        var mockFactory = {
            getItems: function(){
                itemsMock = [ {
                    "id":1,
					"name" : "Birthday Card",
					"description" : "Greeting Cards",
					"dept" : "paperwork",
					"category" : "cards",
					"country" : "USA"
				}];
                    return itemsMock;
            }
        };      
        module(function ($provide) {
            $provide.value('TableFactory', mockFactory);
        });
    });
    it('items should have Table Service', inject(function (TableService) {
        
        var items = TableService.getItems();
        
        expect(items).not.toBeNull();
        expect(items).toBeDefined();
        expect(items).toBe(itemsMock);
    }));
});

/* Test for Factory returning promise */
describe('TableFactory', function () {
    var TableFactory, $httpBackend, $http;
  
    beforeEach(module('uiFrameworkComponent'));
    
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        TableFactory = $injector.get('TableFactory');    
        $http = $injector.get('$http');
    }));
    
    afterEach(function() {
        //$httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.verifyNoOutstandingRequest();
    });

    /*it('TableFactory Exists', function(){
        expect(typeof TableFactory).toBe("object");
    //}); */
    
    /*it('should call get Items http Method', function() {
        $httpBackend.expectGET('http://localhost:8080/cors-master/items.json');
        //$httpBackend.flush();
    });*/
    
    it('should return the response.', function () {
        // set up some data for the http call to return and test later.
        var items = [ {
            id:1,
            name : "Birthday Card",
			description : "Greeting Cards",
			dept : "paperwork",
			category : "cards",
			country : "USA"
        }];
    
        //$httpBackend.when('GET', 'http://localhost:8080/cors-master/items.json').respond(200);
        $httpBackend.expectGET('http://localhost:8080/cors-master/items.json').respond(items);
        
        //var returnedPromise = TableFactory.getItems();
                
        TableFactory.getItems().then(function (response) { 
            expect(response).toEqual(items);
        });
        
    });  
});