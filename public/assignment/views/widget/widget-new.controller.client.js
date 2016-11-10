(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, PageService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;

        vm.selectWidget = selectWidget;

        function init() {
            var promise = WidgetService.findAllWidgetsForPage(vm.pageId);
            promise
                .success(function (widgets) {
                    vm.widgets = widgets;
                })
                .error(function () {
                });
        }

        init();

        function selectWidget(widgetType) {
            //console.log(vm.pageId);
            PageService
                .findPageById(vm.pageId)
                .then(function (response) {
                        vm.page = response.data;
                        vm.widget.pageId = vm.pageId;
                        vm.widget.widgetType = widgetType;
                        console.log(vm.widget);
                        //return WidgetService.createWidget(vm.page._id,vm.widget)
                    }
                )
                .then (function(response) {
                    var newWidget = response.data;
                    console.log(newWidget);
                })
        }
    }
})();

