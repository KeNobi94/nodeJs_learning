/*
* 1.1 1.2
* *
var http = require("http"),
    os = require('os'),
    greeting = require('./greeting'),
    userName = os.userInfo().username;

console.log(`Response date: ${greeting.date}`);
console.log(greeting.getMessage(userName));

http.createServer(function(request,response){

    response.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});

*/


/*
* 2.1
* *var User = require('./user'),
    user = new User('Slava', 23);

user.sayHi();
user.displayInfo();*/

/*
* 2.2
* *var welcome = require("./welcome");

welcome.getMorningMessage();
welcome.getEveningMessage();*/

/*
* 2.3
* *
var greeting = require("./greeting");

global.name = "Slava";

global.console.log(date);
console.log(greeting.getMessage());*/
