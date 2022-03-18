var http = require("http");
http.createServer(function(request,response){
    response.write("Primeiros passos com node")
    response.end();
}).listen(8081);
console.log("Funcionou");
