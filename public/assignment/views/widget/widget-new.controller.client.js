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
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
        }

        init();

        function createNewWidget(widget) {
            widget._id = (new Date()).getTime();
            widget.pageId = vm.pageId;
            WidgetService.createWidget(widget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/");
        }


        function selectWidget(widgetType) {
            var newWidget=[];
            newWidget._id = (new Date()).getTime();
            newWidget.widgetType = widgetType;
            WidgetService.createWidget(newWidget);
            console.log(newWidget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/"+newWidget._id);
            //vm.newWidget._id = (new Date()).getTime();
            //vm.newWidget.widgetType = widgetType;

        }
    }
})();

