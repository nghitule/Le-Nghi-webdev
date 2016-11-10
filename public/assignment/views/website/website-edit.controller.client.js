(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location, UserService) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);

        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        vm.deleteUser = deleteUser;

        function init() {
            var promise = WebsiteService.findAllWebsitesForUser(vm.userId);
            promise
                .success(function(websites) {
                    vm.websites = websites;

                });
        }
        init();

        function init1() {
            WebsiteService
                .findWebsiteById(vm.websiteId)
                .success(function(website){
                    if(website != '0') {
                        vm.website = website;
                    }
                })
                .error(function(){
                });
        }
        init1();

        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(vm.website)
                .success (function() {
                    $location.url("/user/"+vm.userId+"/website");
                });

        }

        function deleteWebsite(website) {
            WebsiteService
                .deleteWebsite(vm.website)
                .success(function(){
                $location.url("/user/"+vm.userId+"/website");
            })
                .error(function() {
                });

        }

        function deleteUser(userId) {
            UserService
                .unregisterUser(vm.user._id)
                .success(function(){
                    $location.url("/login");
                })
                .error(function(){
                });
        }
    }
})();