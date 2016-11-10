(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce) {
        var vm = this;

        vm.uid  = parseInt($routeParams['uid']);
        vm.wid  = parseInt($routeParams['wid']);
        vm.pid  = parseInt($routeParams['pid']);
        vm.wgid = parseInt($routeParams['wgid']);

        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;

        function init() {
            var promise = WidgetService.findAllWidgetsForPage(vm.pid)
            promise
                .success(function(widgets) {
                    vm.widgets=widgets;
                })
                .error(function() {
                });

            // var widgets = $(".wam-widgets") //local variable
            //     .sortable ({
            //         axis: 'y'
            // });
            //console.log(widgets);
        }
        init();

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            return $sce.trustAsResourceUrl(url);
        }
    }
})();