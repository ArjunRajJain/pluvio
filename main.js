var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('robots.txt'));
app.use(express.static('sitemap.xml'));

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'));

console.log("Running on localhost:"+app.get('port'));

app.get('/', function (req, res) {
	res.render('index.ejs', {post: arguments[1]});
});