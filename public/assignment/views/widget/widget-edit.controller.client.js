(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId  = parseInt($routeParams.uid);
        vm.websiteId  = parseInt($routeParams.wid);
        vm.pageId  = parseInt($routeParams.pid);
        vm.widgetId = parseInt($routeParams.wgid);

        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;
        vm.uploadImage = uploadImage;

        function init() {
            WidgetService
                .findWidgetById(vm.widgetId)
                .success(function(widget) {
                    if(widget != '0') {
                         vm.widget=widget;
                        //console.log("success");
                    }
                });
        }
        init();

        function updateWidget(widget) {
            WidgetService
                .updateWidget(widget)
                .success (function() {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/");
                });

        }

        function deleteWidget(widget) {
            WidgetService
                .deleteWidget(widget)
                .success(function(){
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/");
                });
        }

        function uploadImage(widget) {
            WidgetService
                .uploadImage(widget)
                .success (function() {
                    $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/" + widget._id);
                })

         }
    }
})();