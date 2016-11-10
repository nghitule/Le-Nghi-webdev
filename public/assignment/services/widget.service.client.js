(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {

        var api = {
            createWidget: createWidget,
            findAllWidgetsForPage: findAllWidgetsForPage,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            uploadImage: uploadImage,
            sortable: sortable
        };
        return api;

        function createWidget(pid, widget) {
            var url = "/api/page/"+pid+"/widget" + widget;
            return $http.post(url, widgetType);
        }

        function findAllWidgetsForPage(pid) {
            var url = "/api/page/"+pid+"/widget";
            return $http.get(url);
        }

        function findWidgetById(wgid) {
            var url = "/api/widget/" + wgid;
            return $http.get(url);
        }

        function updateWidget(widget) {
            var url = "/api/widget/" + widget._id;
            return $http.put(url,widget);
        }

        function deleteWidget(widget) {
            var url = "/api/widget/" + widget._id;
            return $http.delete(url);
        }

        function uploadImage(widget) {
            var url = "/api/widget/" + widget._id;
            return $http.put(url,widget);
        }

        function sortable(index1, index2) {
            var url = '/page/' +pageId + '/widget?initial='+index1+'&final='+index2;
            return $http.get(url);
        }
    }
})();