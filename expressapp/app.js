
var express = require('express'),
    app = express();

/*
app
    .get("/", function(request, response){

        response.send("<h1>Главная страница</h1>");
    })
    .get("/about", function(request, response){

        response.send("<h1>О сайте</h1>");
    })
    .get("/contact", function(request, response){

        response.send("<h1>Контакты</h1>");
    })
    .listen(3000);
*/
/*
app.use(function(request, response, next){

    console.log("Middleware 1");
    next();
});
app.use(function(request, response, next){

    console.log("Middleware 2");
    next();
});

app.get("/", function(request, response){

    console.log("Route /");
    response.send("Hello");
});
app.listen(3000);
*/

/*
app.get("/book/:pageName.:pageExt", function (request, response) {
    var pageName = request.params["pageName"];
    var pageExt = request.params["pageExt"];
    response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});
*/

/*
var productRouter = express.Router();
productRouter.route("/")
    .get(function(request, response){

        response.send("Список товаров");
    });
productRouter.route("/:id")
    .get(function(request, response){

        response.send(`Товар ${request.params.id}`);
    });
app.use("/products", productRouter);

app.get("/", function(request, response){

    response.send("Главная страница");
});
*/

/*app.use('/static', express.static(__dirname + "/public"));

app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});
app.get("/contact", function(request, response){

    response.send("<h1>Контакты</h1>");
});
app.listen(3000);*/

/*
var bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/public"));

app.post("/register", urlencodedParser, function (request, response) {

    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);

});

app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});

app.listen(3000);
*/

/*
var bodyParser = require('body-parser'),
    jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.post("/user", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});

app.listen(3000);
*/

/*
app
    .set('view engine', 'hbs')
    .get('/', function (request, response) {
        response.send('Main page');
    })
    .get('/contact', function (request, response) {
        response.render('contact.hbs', {
            title: "Мои контакты",
            emailsVisible: true,
            emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
            phone: "+1234567890"
        });
    })
    .listen(3000);
 */

var hbs = require('hbs');

/*
hbs.registerPartials(__dirname + '/views/partials');

app
    .set('view engine', 'hbs')
    .get('/', function (request, response) {
        response.render('home.hbs');
    })
    .get('/contact', function (request, response) {
        response.render('contact.hbs', {
            title: "Мои контакты",
            email: "gavgav@mycorp.com",
            phone: "+1234567890"
        });
    })
    .listen(3000);
*/


var hbs = require('hbs');

hbs.registerHelper('getTime', function () {
    var myDate = new Date(),
        hour = myDate.getHours(),
        minute = myDate.getMinutes(),
        second = myDate.getSeconds();

    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    return 'Current time: ' + hour + ':' + minute + ':' + second;
});

