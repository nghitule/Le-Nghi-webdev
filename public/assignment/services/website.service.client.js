(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {

        var api = {
            createWebsite: createWebsite,
            findAllWebsitesForUser: findAllWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function createWebsite(uid, website) {
            var url = "/api/user/"+uid+"/website";
            return $http.post(url, website);
        }

        function findAllWebsitesForUser(uid) {
            var url = "/api/user/"+uid+"/website";
            return $http.get(url);
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url);
        }

        function updateWebsite(website) {
            var url = "/api/website/" + website._id;
            return $http.put(url,website);
        }

        function deleteWebsite(website) {
            var url = "/api/website/" + website._id;
            return $http.delete(url);
        }
    }
})();