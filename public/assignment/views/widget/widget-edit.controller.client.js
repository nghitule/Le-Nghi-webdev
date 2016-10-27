(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService) {
        var vm = this;

        vm.userId  = parseInt($routeParams['uid']);
        vm.websiteId  = parseInt($routeParams['wid']);
        vm.pageId  = parseInt($routeParams['pid']);
        vm.widgetId = parseInt($routeParams['wgid']);

        vm.updateWidget = updateWidget;

        function init() {
            vm.widgets = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function updateWidget(widget) {
            WidgetService.updatePage(widget);
            $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/");
        }


    }
})();