var express = require('express');
var path = require('path');
var pkg = require('./package');
var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.locals.blog = {
  title: pkg.name,
  description: pkg.description
};

routes(app);

app.listen(9001, function() {
  console.log("Blog started");
});
