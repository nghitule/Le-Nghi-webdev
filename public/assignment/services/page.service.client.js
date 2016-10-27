(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {
        var pages = [
            {"_id": 321, "name": "Post 1", "title": "Hello", "websiteId": 456},
            {"_id": 432, "name": "Post 2", "title": "Welcome", "websiteId": 456},
            {"_id": 543, "name": "Post 3", "title": "Good Morning", "websiteId": 456},
            {"_id": 654, "name": "Post 4", "title": "Good Afternoon", "websiteId": 567},
            {"_id": 765, "name": "Post 5", "title": "Good Evening", "websiteId": 567}
        ];

        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(page) {
            pages.push(page);
        }
        function findPageByWebsiteId(websiteId) {
            var result = [];
            for (var p in pages) {
                if (pages[p].websiteId === websiteId) {
                    result.push(pages[p]);
                }
            }
            return result;

        }

        function findPageById(pageId) {
            var result = [];
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    return pages[p];
                }
            }
        }

        function updatePage(page) {
            for(var p in pages) {
                if(pages[p]._id === page._id){
                    pages[p]= page;
                }
            }

        }

        function deletePage(pageId) {
            for(var p in pages) {
                if(pages[p]._id === pageId){
                    pages.splice(p,1);
                }
            }
        }
    }
})();
