module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/posts');
  });
  app.use('/posts', require('./posts'));
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.render('404');
    }
  });
};
