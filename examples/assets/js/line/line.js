(function(){
    'use strict';
    angular.module('c3js.line', [
        'ui.router'
    ]);
})();

(function(){
    'use strict';
    angular.module('c3js.line')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        $stateProvider
            .state('line', {
                url: '/line',
                templateUrl: 'assets/js/line/line.tpl.html',
                controller: 'LineCtrl',
                controllerAs: 'vm'
            });
    }
})();

(function(){
    'use strict';
    angular.module('c3js.line')
        .controller('LineCtrl', LineCtrl);

    LineCtrl.$inject = [];
    function LineCtrl() {
        var vm = this;

        vm.formatTitleFunction = formatTitleFunction;

        function formatTitleFunction(x) {
            return 'Category ' + x;
        }
    }
})();