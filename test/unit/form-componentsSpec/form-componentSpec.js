describe('Form Components',function() {
    
    var formController , scope, FormService ;
    
    beforeEach(module('uiFrameworkComponent'));
    
    beforeEach(module('uiFrameworkComponent', function($provide) {
    
        FormService = {
                
            getAllOptions : function () {
                //return 'options';
                return { 
                    then: function(callback) {return callback([{ "option" : "Option 1" }]); }
                };
            },
            
            getDropdownSelect : function () { 
                //return 'dropdownSelect';
                return {
                    then: function(callback) {return callback([{ "select" : "01 | Select 1" }]); } 
                };                
            },
            
            getTableDropdown : function () {
                //return 'tableDropdown'; 
                return {
                    then: function(callback) {return callback([{ "code" : "01", "description" : "Description 1" }]); } 
                };
            },
            
            getRadioSelect : function () {
                //return 'radioSelect';
                return {
                    then: function(callback) {return callback([{ "radio" : "Option 1" }]); } 
                };
            },
            
            getCheckboxSelect : function () { 
                //return 'checkboxSelect';
                return {
                    then: function(callback) {return callback([{ "checkbox" : "Option 1" }]); } 
                };
            }
        };
        
        spyOn(FormService, "getAllOptions").and.callThrough();
        spyOn(FormService, "getDropdownSelect").and.callThrough();
        spyOn(FormService, "getTableDropdown").and.callThrough();
        spyOn(FormService, "getRadioSelect").and.callThrough();
        spyOn(FormService, "getCheckboxSelect").and.callThrough();
        
        $provide.value("FormService", FormService);
    }));  
    
    beforeEach(inject(function ($rootScope,$controller,FormService) { 
    
        scope = $rootScope.$new();
        FormService = FormService;
        
        formController = $controller('FormController',{  
            '$scope': scope,
            FormService : FormService
        });
        
        spyOn(scope, 'showTable').and.callThrough();
    }));
    
    it('is setup', function () {
        expect(scope.condition).toBe(false);
    });
    
    it('showTable is called', function () {
        scope.showTable();
        expect(scope.condition).toBe(true);
        expect(scope.showTable).toHaveBeenCalled();
    });
    
    it('Get all the Options', function () {
        expect(scope.options).not.toBe(null);
        expect(scope.options).toBeDefined();
        expect(FormService.getAllOptions).toHaveBeenCalled();
    });
    
    it('Get the Table Drop Down', function () {
        expect(scope.dropdownSelect).not.toBe(null);
        expect(scope.dropdownSelect).toBeDefined();
        expect(FormService.getDropdownSelect).toHaveBeenCalled();
    });
    
    it('Get the Options', function () {
        expect(scope.tableDropdown).not.toBe(null);
        expect(scope.tableDropdown).toBeDefined();
        expect(FormService.getTableDropdown).toHaveBeenCalled();
    });
    
    it('Get the Radio select', function () {
        expect(scope.radioSelect).not.toBe(null);
        expect(scope.radioSelect).toBeDefined();
        expect(FormService.getRadioSelect).toHaveBeenCalled();
    });
    
    it('Get the Checkbox select', function () {
        expect(scope.checkboxSelect).not.toBe(null);
        expect(scope.checkboxSelect).toBeDefined();
        expect(FormService.getCheckboxSelect).toHaveBeenCalled();
    });
});

describe('FormService', function () {
    
    beforeEach(module('uiFrameworkComponent'));
    
    var optionsMock, dropdownselectMock, tabledropdownMock, radioselectMock, checkboxselectMock;
    
    beforeEach(function () {
        
        var mockFactory = {
            
            getOptions : function(){
                optionsMock =  [ 
                    { "option" : "Option 1" },
                    { "option" : "Option 2" },
                    { "option" : "Option 3" },
                    { "option" : "Option 4" },
                    { "option" : "Option 5" }
                ];
                return optionsMock;
            },
            
            getDropdownSelect : function(){
                dropdownselectMock = [ 
                    { "select" : "01 | Select 1" },
                    { "select" : "02 | Select 2" },
                    { "select" : "03 | Select 3" },
                    { "select" : "04 | Select 4" },
                    { "select" : "05 | Select 5" }
                ];
                return dropdownselectMock;
            },
            
            getTableDropDown : function(){   
                tabledropdownMock = [ 

                    { "code" : "01", "description" : "Description 1" },
                    { "code" : "02", "description" : "Description 2" },
                    { "code" : "03", "description" : "Description 3" },
                    { "code" : "04", "description" : "Description 4" },
                    { "code" : "05", "description" : "Description 5" }	
                ];
                return tabledropdownMock;
            },
            
            getRadioSelect : function(){
                radioselectMock = [ 
                    { "radio" : "Option 1" },
                    { "radio" : "Option 2" }
                ];
                return radioselectMock;
            },
            
            getCheckboxSelect: function(){
                checkboxselectMock = [ 
                    { "checkbox" : "Option 1" },
                    { "checkbox" : "Option 2" }
                ];
                return checkboxselectMock;
            }  
        };
        
        module(function ($provide) {
            $provide.value('FormFactory', mockFactory);
        });
    });
    
    it('options should have Form Service', inject(function (FormService) {
        var options = FormService.getAllOptions();
        expect(options).not.toBeNull();
        expect(options).toBeDefined();
        expect(options).toBe(optionsMock);
    }));
    
    it('drop down should have Form Service', inject(function (FormService) {
        var dropdownselect = FormService.getDropdownSelect();
        expect(dropdownselect).not.toBeNull();
        expect(dropdownselect).toBeDefined();
        expect(dropdownselect).toBe(dropdownselectMock);
    }));
    
    it('table drop down should have Form Service', inject(function (FormService) {   
        var tabledropdown = FormService.getTableDropdown();
        expect(tabledropdown).not.toBeNull();
        expect(tabledropdown).toBeDefined();
        expect(tabledropdown).toBe(tabledropdownMock);
    }));
    it('radioselect should have Form Service', inject(function (FormService) {   
        var radioselect = FormService.getRadioSelect();
        expect(radioselect).not.toBeNull();
        expect(radioselect).toBeDefined();
        expect(radioselect).toBe(radioselectMock);
    }));
    
    it('checkboxselect should have Form Service', inject(function (FormService) {      
        var checkboxselect = FormService.getCheckboxSelect();
        expect(checkboxselect).not.toBeNull();
        expect(checkboxselect).toBeDefined();
        expect(checkboxselect).toBe(checkboxselectMock);
    }));
});

/*Test for FormFactory returning Json data*/
/*describe('FormFactory', function () {
    
    var factory;
    
    beforeEach(module('uiFrameworkComponent'));
    
    it('options should have Form Factory', inject(function ($injector) {
        factory = $injector.get('FormFactory');
        var options = factory.getOptions();
        expect(options).not.toBeNull();
        expect(options).toBeDefined();
    }));
    
     it('drop down should have Form Factory', inject(function ($injector) {
        factory = $injector.get('FormFactory');
        var dropdownselect = factory.getDropdownSelect();
        expect(dropdownselect).not.toBeNull();
        expect(dropdownselect).toBeDefined();
         
    }));
    
    it('table drop down should have Form Factory', inject(function ($injector) {
        factory = $injector.get('FormFactory');
        var tabledropdown = factory.getTableDropDown();
        expect(tabledropdown).not.toBeNull();
        expect(tabledropdown).toBeDefined();
    }));
    
    it('radioselect should have Form Factory', inject(function ($injector) {
        factory = $injector.get('FormFactory');
        var radioselect = factory.getRadioSelect();
        expect(radioselect).not.toBeNull();
        expect(radioselect).toBeDefined();
    }));
    
    it('checkboxselect should have Form Factory', inject(function ($injector) {
        factory = $injector.get('FormFactory');
        var checkboxselect = factory.getCheckboxSelect();
        expect(checkboxselect).not.toBeNull();
        expect(checkboxselect).toBeDefined();
    }));
});*/



/* Test for Factory returning promise */
/*
describe('FormFactory', function () {
    
    var FormFactory, httpBackend;

    beforeEach(module('FormFactory'));

    beforeEach(function () {  
        module('uiFrameworkComponent');
            inject(function($httpBackend, FormFactory) {
            FormFactory = FormFactory;      
            httpBackend = $httpBackend;
        });
    });
  
    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return the response of getOptions', function (){
        // set up some data for the http call to return and test later.
        var options =  [ 
            { "option" : "Option 1" },
            { "option" : "Option 2" },
            { "option" : "Option 3" },
            { "option" : "Option 4" },
            { "option" : "Option 5" }
        ];
    
        httpBackend.expectGET('http://localhost:8080/cors-master/options.json').respond(options);
    
        var returnedPromise = FormFactory.getOptions();
        var result;
      
        returnedPromise.then(function(response) {
            result = response;
        });
      
        httpBackend.flush();    
        expect(result).toEqual(options);
    });
    
    it('should return the response of getDropdownSelect', function () {
        // set up some data for the http call to return and test later.
        var dropdownselect = [ 
            { "select" : "01 | Select 1" },
            { "select" : "02 | Select 2" },
            { "select" : "03 | Select 3" },
            { "select" : "04 | Select 4" },
            { "select" : "05 | Select 5" }
        ];

        httpBackend.expectGET('http://localhost:8080/cors-master/dropdownSelect.json').respond(dropdownselect);

        var returnedPromise = FormFactory.getDropdownSelect();

        var result;
        returnedPromise.then(function(response) {
            result = response;
        });

        httpBackend.flush();
        expect(result).toEqual(dropdownselect);
    });
    
    it('should return the response of tabledropdown', function (){
        // set up some data for the http call to return and test later.
        var tabledropdown = [
            { "code" : "01", "description" : "Description 1" },
            { "code" : "02", "description" : "Description 2" },
            { "code" : "03", "description" : "Description 3" },
            { "code" : "04", "description" : "Description 4" },
            { "code" : "05", "description" : "Description 5" }	
        ];

        httpBackend.expectGET('http://localhost:8080/cors-master/tableDropdown.json').respond(tabledropdown);

        var returnedPromise = FormFactory.getTableDropDown();

        var result;
        returnedPromise.then(function(response) {
            result = response;
        });

        httpBackend.flush();

        expect(result).toEqual(tabledropdown);
    });
    
    it('should return the response of getRadioSelect', function (){
        // set up some data for the http call to return and test later.
        var radioselect = [ 
                    { "radio" : "Option 1" },
                    { "radio" : "Option 2" }
                ];

        httpBackend.expectGET('http://localhost:8080/cors-master/radioSelect.json').respond(radioselect);

        var returnedPromise = FormFactory.getRadioSelect();

        var result;
        returnedPromise.then(function(response) {
            result = response;
        });

        httpBackend.flush();
        expect(result).toEqual(radioselect);
    });
    
    it('should return the response of getCheckboxSelect', function (){
        // set up some data for the http call to return and test later.
        var  checkboxselect = [ 
                    { "checkbox" : "Option 1" },
                    { "checkbox" : "Option 2" }
                ];

        httpBackend.expectGET('http://localhost:8080/cors-master/checkboxSelect.json').respond(checkboxselect);

        var returnedPromise = FormFactory.getCheckboxSelect();

        var result;
        returnedPromise.then(function(response) {
            result = response;
        });

        httpBackend.flush();
        expect(result).toEqual(checkboxselect);
    });  
});
*/