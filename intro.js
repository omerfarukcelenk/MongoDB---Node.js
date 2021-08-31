var http = require('http');
var log = require('./log.js')
var sayHello = require("./exportDemo.js")
http.createServer(function (request, response) {
    if (request.url == "/admin") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write("<html><body><strong> Admin Sayfasi </strong><body></html>")
    } else if (request.url == "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write("<html><body><strong> Ana Sayfa </strong><body></html>")
    } else if (request.url == "/customer") {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({ name: "Ömer Faruk", lastname: "Çelenk" }))
    }
    response.end()
}).listen(8081)

log.information('Sunucu yayına geçti')
console.log(sayHello())
