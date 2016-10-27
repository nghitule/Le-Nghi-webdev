(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
        var websites = [
            {"_id": 123, "name": "Facebook",      "developlerId": 456},
            {"_id": 234, "name": "Tweeter",       "developlerId": 456},
            {"_id": 456, "name": "Gizmodo",       "developlerId": 456},
            {"_id": 567, "name": "Tic Tac Toe",   "developlerId": 123},
            {"_id": 678, "name": "Checkers",      "developlerId": 123},
            {"_id": 789, "name": "Chess",         "developlerId": 234}
        ];

        var api = {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function createWebsite(website) {
            websites.push(website);
        }

        function findWebsitesByUser(userId) {
            var result = [];
            for(var w in websites) {
                if(websites[w].developlerId === userId){
                    result.push(websites[w]);
                }
            }
            return result;
        }

        function findWebsiteById(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId){
                    return (websites[w]);
                }
            }
        }

        function updateWebsite(website) {
            for(var w in websites) {
                if(websites[w]._id === website._id){
                    websites[w]= website;
                }
            }
        }

        function deleteWebsite(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId){
                    websites.splice(w,1);
                }
            }
        }

        function deleteUser(userId) {
            for(var w in websites) {
                if(websites[w].developlerId === userId){
                    websites.splice(w,1);
                }
            }
        }
    }
})();