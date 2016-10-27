(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;

        vm.userId= parseInt($routeParams['uid']);
        vm.websiteId = parseInt($routeParams['wid']);
        vm.pageId = parseInt($routeParams['pid']);
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();

        function init1() {
            vm.currentPage = PageService.findPageById(vm.pageId);
        }
        init1();

        function updatePage(page) {
            PageService.updatePage(page);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
        }

        function deletePage(pageId) {
            PageService.deletePage(pageId);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");

        }
    }
})();