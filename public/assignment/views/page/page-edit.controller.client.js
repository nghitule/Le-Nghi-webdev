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
            var promise = PageService.findAllPagesForWebsite(vm.websiteId);
            promise
                .success(function(pages) {
                    vm.pages = pages;
                });
        }
        init();

        function init1() {
            PageService
                .findPageById(vm.pageId)
                .success(function(page){
                    if(page != '0') {
                        vm.page = page;
                    }
                })
                .error(function(){
                });
        }
        init1();

        function updatePage(page) {
            PageService
                .updatePage(page)
                .success (function() {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            });
        }

        function deletePage(pageId) {
            PageService
                .deletePage(pageId)
                .success(function() {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            });
        }
    }
})();