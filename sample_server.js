var http=require('http')


http.createServer(server).listen(7000)

function server(req,res){
    res.write("jessie pink man")
    res.end()
}


http.createServer(function(req,res) {
    res.write("walter white")
    res.end()
}).listen(8000)




//html page respond

var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()

    }) 
}).listen(7000)


