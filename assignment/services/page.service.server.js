module.exports = function(app) {
    var pages = [
        {_id: 321, name: "Post 1", title: "Hello",          websiteId: 456},
        {_id: 432, name: "Post 2", title: "Welcome",        websiteId: 456},
        {_id: 543, name: "Post 3", title: "Good Morning",   websiteId: 456},
        {_id: 654, name: "Post 4", title: "Good Afternoon", websiteId: 567},
        {_id: 765, name: "Post 5", title: "Good Evening",   websiteId: 567}
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);


    function createPage(req, res) {
        var page = req.body;
        pages.push(page);
        res.send(pages);
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.websiteId;
        var result = [];
        for (var p in pages) {
            if (pages[p].websiteId == wid) {
                result.push(pages[p]);
            }
        }
        res.json(result);
    }

        function findPageById(req,res) {
            var pageId = parseInt(req.params.pageId);
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    res.send(pages[p]);
                    return;
                }
            }
            res.send('0');
        }

    function updatePage(req,res) {
        var page = req.body;
        var pid = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id === pid) {
                pages[p]= page;
            }
        }
        res.send(200);
    }

    function deletePage(req,res) {
        var pid = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id === pid) {
                pages.splice(p,1);
            }
        }
        res.send(200);

    }

}