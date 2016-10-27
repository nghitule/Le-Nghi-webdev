(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService() {
        var widgets = [
            { "_id": 123, "widgetType": "HEADER", "pageId": 321, "size": 2, "text": "GIZMODO"},
            { "_id": 234, "widgetType": "HEADER", "pageId": 321, "size": 4, "text": "Lorem ipsum"},
            { "_id": 345, "widgetType": "IMAGE", "pageId": 321, "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": 456, "widgetType": "HTML", "pageId": 321, "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'},
            { "_id": 567, "widgetType": "HEADER", "pageId": 321, "size": 4, "text": "Lorem ipsum"},
            { "_id": 678, "widgetType": "YOUTUBE", "pageId": 321, "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": 789, "widgetType": "HTML", "pageId": 321, "text": "<p>Lorem ipsum</p>"},

            { "_id": 123, "widgetType": "HEADER", "pageId": 654, "size": 2, "text": "GIZMODO"},
            { "_id": 234, "widgetType": "HEADER", "pageId": 654, "size": 4, "text": "Lorem ipsum"},
            { "_id": 345, "widgetType": "IMAGE", "pageId": 654, "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": 456, "widgetType": "HTML", "pageId": 654, "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'},
            { "_id": 567, "widgetType": "HEADER", "pageId": 654, "size": 4, "text": "Lorem ipsum"},
            { "_id": 678, "widgetType": "YOUTUBE", "pageId": 654, "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": 789, "widgetType": "HTML", "pageId": 654, "text": "<p>Lorem ipsum</p>"}
        ];

        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(widget) {
            var newWidget = [];
            newWidget = widgets.push(widget);
            return newWidget;
        }

        function findWidgetsByPageId(pageId) {
            var result = [];
            for(var wg in widgets) {
                if(widgets[wg].pageId === pageId){
                    result.push(widgets[wg]);
                }
            }
            return result;
        }
        function findWidgetById(widgetId) {
            for(var wg in widgets) {
                if(widgets[wg]._id === widgetId){
                    return widgets[wg];
                }
            }
        }

        function updateWidget(widget) {
            for(var wg in widgets) {
                if(widgets[wg]._id === widgets._id){
                    widgets[wg]= widget;
                }
            }
        }

        function deleteWidget(widget) {
            WidgetService.deleteWidget(widget);
            $location.url("/user/"+vm.userId+"/website"+vm.websiteId+"/page/"+vm.pageId+"/widget");
        }

    }
})();