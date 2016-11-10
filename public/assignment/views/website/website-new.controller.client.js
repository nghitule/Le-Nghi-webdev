(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;

        vm.userId = parseInt($routeParams.uid);
        vm.createWebsite = createWebsite;

        function init() {
            var promise = WebsiteService.findAllWebsitesForUser(vm.userId);
            promise
                .success(function(websites) {
                    vm.websites = websites;
                });
        }
        init();

        function createWebsite(website) {
            // it does not matter to keep these 2 lines here or move them to server.
            // later, they will be removed, database will take care of this.
            website._id = (new Date()).getTime();
            website.developlerId = vm.userId;

            WebsiteService
                .createWebsite(vm.userId,website)
                .success(function() {
                    $location.url("/user/"+vm.userId+"/website");
                });
        }
    }
})();

