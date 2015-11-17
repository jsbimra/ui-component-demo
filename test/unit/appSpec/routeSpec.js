describe('ui route', function() {

  var $rootScope, $scope, stateUrl, $state, $httpBackend, $controller, tCtrl;
    
    beforeEach(function() {
        module('uiFrameworkComponent', function($provide) {
            $provide.value('mockService', mockService = {});
        });

        inject(function(_$rootScope_, _$state_ , _$controller_, _$injector_, $templateCache, _$httpBackend_) {
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $state = _$state_;
            $httpBackend = _$httpBackend_;
            $templateCache.put('app/main-container/MainContainerTmpl.html','');
            $templateCache.put('app/header/HeaderTmpl.html','');
            $templateCache.put('app/sub-container/SubContainerTmpl.html','');
            $templateCache.put('app/data-table/data_table.html','');
        });
    });
    


    it('should respond to URL of home', function() {
        stateUrl ='home';
        expect($state.href(stateUrl)).toEqual('#');
    });
    
    it('should respond to URL of main', function() {
        stateUrl ='home.main';
        expect($state.href(stateUrl)).toEqual('#/main');
    });
    
    it('should respond to URL of datatable', function() {
        stateUrl ='home.main.datatable';
        expect($state.href(stateUrl)).toEqual('#/main/datatable');
    });
    
    it('should respond to URL of form', function() {
        stateUrl ='home.main.form';
        expect($state.href(stateUrl)).toEqual('#/main/form');
    });
    
    it('should respond to URL of error', function() {
        stateUrl ='home.main.error';
        expect($state.href(stateUrl)).toEqual('#/main/error');
    });
    
    it('should respond to URL of loader', function() {
        stateUrl ='home.main.loader';
        expect($state.href(stateUrl)).toEqual('#/main/loader');
    });
    

    /*it('should transition to pairing state if device is not paired', function() {
      $httpBackend.when('GET', '/index.html').respond(200);
     // $scope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('home');

    });*/
    
    it('should transition to home', inject(function($state, $rootScope){
        stateUrl ='home.main.datatable';
        $state.transitionTo(stateUrl);
        
        $rootScope.$digest();
        
        dump($state.current);

        expect($state.current.name).toBe(stateUrl);

    }));
});