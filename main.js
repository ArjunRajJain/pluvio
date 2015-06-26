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
app.get('/blog/', function (req,res) {
	res.render('blog.ejs', {post: arguments[1]});
});
app.get('/apple_app', function (req, res) {
	res.redirect('https://appsto.re/us/vKsm2.i');
});
app.get('/app',function (req,res){
	res.render('app.ejs');
});
app.get('/android_app', function (req, res) {
	res.redirect('https://play.google.com/store/apps/details?id=com.downtochill.dtc&hl=en');
});
app.get('/privacy_policy', function (req, res) {
	res.render('privacy_policy.ejs');
});
app.get('/press', function (req, res) {
	res.render('press.ejs');
});
app.get('/terms', function (req, res) {
	res.render('terms.ejs');
});
app.get('/data', function (req, res) {
	res.redirect('http://default-environment-fkvngsc5bv.elasticbeanstalk.com/');
});