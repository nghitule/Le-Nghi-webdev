(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;

        vm.userId= parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);

        function init() {
            var promise = PageService.findAllPagesForWebsite(vm.websiteId);
            promise
                .success (function(pages) {
                    vm.pages = pages;
                })
                .error(function() {
                })
        }
        init();
    }
})();