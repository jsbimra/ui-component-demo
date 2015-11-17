describe('UI Demo module', function () {
    
    var module = angular.module('uiFrameworkComponent');
    
    it('should exist', function () {
        expect(module).not.toBeNull();
    });
    
    it('should have seven dependencies', function () {
        expect(module.requires.length).toBe(7);
        expect(module.requires).toContain('ngAnimate', 'ngSanitize','ui.bootstrap', 'smart-table', 'pascalprecht.translate', 'ui.router', 'ngResource');
    });
});