// app-module
(function(){
    'use strict';
    angular.module('graphApp', [
        'c3js.angular.chart',
        //'graphApp.services',
        'ngMaterial',
        'ui.router',
        'c3js.dashboard',
        'c3js.bar',
        'c3js.line',
        'c3js.pie',
        'c3js.callback',
        'c3js.donut',
        'c3js.config',
        'c3js.gauge',
        'c3js.dynamic'
    ]);
})();

// app-config
(function(){
    'use strict';
    angular.module('graphApp')
        .config(defaultRouteConfig);

    defaultRouteConfig.$inject = ['$urlRouterProvider'];

    function defaultRouteConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");
    }
})();