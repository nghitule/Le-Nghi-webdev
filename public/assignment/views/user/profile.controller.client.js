(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService, $location) {
        var vm = this;

        var userId = parseInt($routeParams.uid);

        vm.updateUser = updateUser;
        vm.unregisterUser = unregisterUser;

        function init() {
            UserService
                .findUserById(userId)
                .success(function(user){
                    if(user != '0') {
                        vm.user = user;
                    }
                })
                .error(function(){

                });
        }
        init();

        function updateUser() {
            //console.log(vm.user);
            UserService.updateUser(vm.user);
        }

        function unregisterUser() {
            //console.log(vm.user._id);
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
