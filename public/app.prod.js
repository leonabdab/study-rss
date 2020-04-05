"use strict";var express=require("express"),path=require("path"),cors=require("cors"),db=require("./app-modules/db"),routes=require("./api/routes"),emailRouter=require("./routes/email"),rssRouter=require("./routes/rss"),dataRouter=require("./routes/data"),app=express();app.use(express.json()),db.connect();var PORT=process.env.PORT||3e3;app.use(cors()),app.use(express.static(path.join(__dirname,"src"))),app.use(routes.email,emailRouter),app.use(routes.rss,rssRouter),app.use(routes.data,dataRouter),app.get(routes.main,function(e,r){r.sendFile(path.join(__dirname,"./dist/index.html"))}),app.listen(PORT,function(){console.log("server running on ".concat(PORT,"..."))});