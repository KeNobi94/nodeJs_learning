/*
var express = require('express'),
    app = express();

app.get('/', function (request, response) {

    response.end('Hi express');

}).listen(3000);*/

/*var nodePath = process.argv[0];
var appPath = process.argv[1];
var name = process.argv[2];
var age = process.argv[3];

console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);*/

/*
var http = require("http");

var message = "Hello World!";
http.createServer(function(request,response){

    console.log(message);
    response.end(message);

}).listen(3000, "127.0.0.1",() => {
    console.log("Сервер начал прослушивание запросов");
});

//npm install @nodemon - server live monitoring
*/

/*function displaySync(data){
    console.log(data);
}

console.log("Начало работы программы");

displaySync("Обработка данных...");

console.log("Завершение работы программы");*/

/*function display(data, callback){

    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt > 5 ? new Error("Ошибка выполнения. randInt больше 5") : null;

    setTimeout(function(){
        callback(err, data);
    }, 0);
}

console.log("Начало работы программы");

display("Обработка данных...", function (err, data){

    if(err) throw err;
    console.log(data);
});

console.log("Завершение работы программы");*/

/*var fs = require("fs");

fs.appendFile("hello.txt", "Привет МИГ-29!");

// асинхронное чтение
fs.readFile("hello.txt", "utf8",
    function(error,data){
        console.log("Асинхронное чтение файла");
        if(error) throw error; // если возникла ошибка
        console.log(data);  // выводим считанные данные
    });

fs.writeFileSync("hello.txt", "Привет ми ми ми!");

// синхронное чтение
console.log("Синхронное чтение файла");
var fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);*/
/*
var util = require("util");
var EventEmitter = require("events");

function User(){
}
util.inherits(User, EventEmitter);

var eventName = "greet";
User.prototype.sayHi = function(data){
    this.emit(eventName, data);
}
var user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});

user.sayHi("Мне нужна твоя одежда...");*/

/*var fs = require("fs");

var writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
var readableStream = fs.createReadStream("hello.txt", "utf8");

readableStream.on("data", function(chunk){
    console.log(chunk);
});*/

/*var fs = require("fs");
var zlib = require("zlib");

var readableStream = fs.createReadStream("hello.txt", "utf8");
var writeableStream = fs.createWriteStream("hello.txt.gz");
var gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(writeableStream);*/

/*var http = require('http');

http.createServer().listen(3000, '127.0.0.1', function () {
    console.log('Server is listening');
});*/
/*

var http = require("http");

http.createServer(function(request, response){

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);

    response.end();
}).listen(3000);
*/

/*var http = require("http");

http.createServer(function(request, response){

    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html");
    response.write("<h2>hello world</h2>");
    response.end();
}).listen(3000);*/

/*var http = require('http'),
    fs = require('fs');

http
    .createServer(function (request, response) {

        fs.readFile('public/index.html', 'utf8', function (error, data) {
            var message = 'Hello Node!',
                header = 'main page';

            data = data
                .replace('{header}', header)
                .replace('{message}', message);

            response.end(data);
        });

    })
    .listen(3000);*/

/*
var http = require('http'),
    fs = require('fs');

http
    .createServer(function (request, response) {

        if(request.url=="/some.docx") {
            response.writeHead(200, {"Content-Type" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
            fs
                .createReadStream("some.docx")
                .pipe(response);
        }
        else{
            response.end("hello world!");
        }

    })
    .listen(3000);*/
