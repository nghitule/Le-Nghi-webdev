(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.userId = parseInt($routeParams['uid']);
        vm.websiteId = parseInt($routeParams['wid']);
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        vm.deleteUser = deleteUser;

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        function init1() {
            vm.currentWebsite = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init1();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(website);
            $location.url("/user/"+vm.userId+"/website");
        }

        function deleteWebsite(website) {
            WebsiteService.deleteWebsite(website);
            $location.url("/user/"+vm.userId+"/website");
        }

        function deleteUser(userId) {
            WebsiteService.deleteUser(userId);
            $location.url("/home");
        }
    }
})();