describe('Toggle Menu',function(){
    
    beforeEach( module('uiFrameworkComponent') );
    
    var SidebarController,scope;
    
    beforeEach(inject(function ($rootScope,$controller) {
    
        scope = $rootScope.$new();
        
        SidebarController = $controller('SidebarController',{           
           '$scope': scope
        });
    }));
    
    it('SideBar Initial State', function () {
       expect(scope.state).toBe(true);
    });
});