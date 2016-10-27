(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;

        vm.userId = parseInt($routeParams['uid']);
        vm.createWebsite = createWebsite;

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }
        init();

        function createWebsite(website) {
            website._id = (new Date()).getTime();
            website.developlerId = vm.userId;

            WebsiteService.createWebsite(website);
            $location.url("/user/"+vm.userId+"/website");
        }
    }
})();

