module.exports = function(app) {
    var websites = [
        {"_id": 123, "name": "Facebook",      "developlerId": 456},
        {"_id": 234, "name": "Tweeter",       "developlerId": 456},
        {"_id": 456, "name": "Gizmodo",       "developlerId": 456},
        {"_id": 567, "name": "Tic Tac Toe",   "developlerId": 123},
        {"_id": 678, "name": "Checkers",      "developlerId": 123},
        {"_id": 789, "name": "Chess",         "developlerId": 234}
    ];

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    function createWebsite(req, res) {
        var website = req.body;
        websites.push(website);
        res.send(websites);
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.userId;
        var result = [];
        for(var w in websites) {
            if(websites[w].developlerId == uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
        //result is an array, json format.
        // Use res.json, so does not need to test if it is json or text,...
    }

    function findWebsiteById(req,res) {
        var websiteId = parseInt(req.params.websiteId);
        for(var w in websites) {
            if(websites[w]._id === websiteId) {
                res.send(websites[w]);
                return;
            }
        }
        res.send('0');
    }

    function updateWebsite(req,res) {
        var website = req.body;
        var wid = parseInt(req.params.websiteId);
        for(var w in websites) {
            if(websites[w]._id === wid) {
                websites[w]= website;
            }
        }
        res.send(200);
    }

    function deleteWebsite(req,res) {
        var wid = parseInt(req.params.websiteId);
        for(var w in websites) {
            if(websites[w]._id === wid){
                websites.splice(w,1);
            }
        }
        res.send(200);

    }

};
