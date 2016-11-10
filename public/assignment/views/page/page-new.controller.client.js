(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams,PageService, $location) {
        var vm = this;

        vm.userId= parseInt($routeParams['uid']);
        vm.websiteId = parseInt($routeParams['wid']);
        vm.createPage = createPage;

        function init() {
            var promise = PageService.findAllPagesForWebsite(vm.websiteId);
            promise
                .success(function(page) {
                    vm.page = page;
                })
        }
        init();

        function createPage(page) {
            page._id = (new Date()).getTime();
            page.websiteId = vm.websiteId;
            PageService
                .createPage(vm.websiteId, page)
                .success(function() {
                    $location.url("/user/"+userId+"/website/"+vm.websiteId+"/page");
                });
        }
    }
})();
