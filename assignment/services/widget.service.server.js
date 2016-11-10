module.exports = function(app,model) {

    var widgets = [
        { "_id": 12345, "widgetType": "HEADER", "pageId": 321, "size": 2, "text": "GIZMODO"},
        { "_id": 23456, "widgetType": "HEADER", "pageId": 321, "size": 4, "text": "Lorem ipsum"},
        { "_id": 34567, "widgetType": "IMAGE", "pageId": 321, "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": 45678, "widgetType": "HTML", "pageId": 321, "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'},
        { "_id": 56789, "widgetType": "HEADER", "pageId": 321, "size": 4, "text": "Lorem ipsum"},
        { "_id": 67890, "widgetType": "YOUTUBE", "pageId": 321, "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": 78901, "widgetType": "HTML", "pageId": 321, "text": "<p>Lorem ipsum</p>"},

        { "_id": 123123, "widgetType": "HEADER", "pageId": 654, "size": 2, "text": "GIZMODO GIZMODO "},
        { "_id": 234123, "widgetType": "HEADER", "pageId": 654, "size": 4, "text": "Lorem ipsum 1"},
        { "_id": 345123, "widgetType": "IMAGE", "pageId": 654, "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": 456123, "widgetType": "HTML", "pageId": 654, "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'},
        { "_id": 567123, "widgetType": "HEADER", "pageId": 654, "size": 4, "text": "Lorem ipsum 2"},
        { "_id": 678123, "widgetType": "YOUTUBE", "pageId": 654, "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": 789123, "widgetType": "HTML", "pageId": 654, "text": "<p>Lorem ipsum 3</p>"}
    ];

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId",updateWidget);
    app.put("/api/widget/:widgetId",uploadImage);
    app.delete("/api/widget/:widgetId",deleteWidget);
    app.put ("/api/page/:pageId/widget",sortable);


    function createWidget(req, res) {
        var widget = req.body;
        //widgets.push(widget);
        //console.log("hello from createWidget @ server.server.js");
        console.log(widget);
        //res.send(widgets);
    }

    function findAllWidgetsForPage(req, res) {
        var pid = req.params.pageId;
        var result = [];
        for(var wg in widgets) {
            if(widgets[wg].pageId == pid) {
                result.push(widgets[wg]);
            }
        }
        res.json(result);
    }

    function findWidgetById(req,res) {
        var widgetId = parseInt(req.params.widgetId);
        for(var wg in widgets) {
            if(widgets[wg]._id === widgetId) {
                res.send(widgets[wg]);
                return;
            }
        }
        res.send('0');
    }

    function updateWidget(req,res) {
        var widget = req.body;
        var wgid = parseInt(req.params.widgetId);
        for(var wg in widgets) {
            if(widgets[wg]._id === wgid) {
                widgets[wg]= widget;
            }
        }
        res.send(200);
    }

    function deleteWidget(req,res) {
        var wgid = parseInt(req.params.widgetId);
        for (var wg in widgets) {
            if (widgets[wg]._id === wgid) {
                widgets.splice(wg, 1);
            }
        }
        res.send(200);
    }

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    //var mime = require('mime'); //npm install mime --save

    app.post ("/api/upload", upload.single('myFile'), uploadImage);

    function uploadImage(req, res) {
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname;
        var filename      = myFile.filename;
        var path          = myFile.path;
        var destination   = myFile.destination;
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        for (var wg in widgets) {
            var existingWidget = widgets[wg];
            if (pageId !== existingWidget.pageId) {
                continue;
            }
            if (widgetId === existingWidget._id) {
                existingWidget.url = '/uploads/' + filename;
                break;
            }
         }
        // var storage = multer.diskStorage({
        //     destination: function (req, file, cb) {
        //         cb(null, __dirname+'/../../public/uploads')
        //     },
        //     filename: function (req, file, cb) {
        //         cb(null,filename + '.' + mime.extension(mimetype));
        //     }
        // });
        // var upload = multer({ storage: storage });
        res.redirect('../assignment/index.html#/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/' + widgetId);
        return;
    }

    function sortable(req,res) {
        var inital = req.query.inital;
        var final = req.query.final;

        res.send(inital + final);
    }
};
