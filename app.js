const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request,response){
    console.log('Client Request URL: ${request.url}');

    if(request.url=="/cars"){
        fs.readFile("./views/cars.html",function (errors,contents){
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(contents);
            response.end();
        })

    }
    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === "/cars/new") {
        fs.readFile('./views/newcars.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/1'){
        // notice we won't include the utf8 encoding
        console.log('*********')
        fs.readFile('./images/Unknown-1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/2'){
        // notice we won't include the utf8 encoding
        console.log('*********')
        fs.readFile('./images/Unknown-2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/3'){
        // notice we won't include the utf8 encoding
        console.log('*********')
        fs.readFile('./images/Unknown.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/4'){
        // notice we won't include the utf8 encoding
        console.log('*********')
        fs.readFile('./images/Unknown-4.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/5'){
        // notice we won't include the utf8 encoding
        console.log('*********')
        fs.readFile('./images/Unknown-3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/6'){
        // notice we won't include the utf8 encoding
        console.log('*********')
        fs.readFile('./images/images-1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      



    else{
        response.writeHead(404);
        response.end("Page Not Found!!!");
    }


});
server.listen(7077, function() {console.log("listening on port 7077")}.js)