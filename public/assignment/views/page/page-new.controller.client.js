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
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();

        function createPage(page) {
            page._id = (new Date()).getTime();
            page.websiteId = vm.websiteId;
            PageService.createPage(page);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
        }
    }
})();
