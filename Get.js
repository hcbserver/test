var finalhandler = require('finalhandler')
var http = require('http')
var serverStatic = require('server-static')
var url = require("url")
var server = http.creatServer(function onRequest (req,res){
        var pathname = url.parse(req.url).pathname;
        if (pathname == "/addDatanumber")
        {
                var queryJSON = url.parse(req.url,true).query;
                console.log(queryJSON.number);// number 是前端传来的数据的名字
                var data = "姓名:" + queryJSON.number + "\r\n";
                fs.writeFile("./testData/" + queryJSON.number + ".txt",data,function(err){
                        if (err){
                                res.end("fail")
                                }
                        else    {
                                res.end("sucess")
                                }

    })
  }
})
server.listen(80)
console.log("Server is Running")
  