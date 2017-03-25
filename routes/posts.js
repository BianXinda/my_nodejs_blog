var express = require('express');
var router = express.Router();

var PostsModel = require('../models/posts.js');

router.get('/', function(req, res, next) {
  res.render('posts', {
    content: PostsModel.getPost('posts')
  });
});

router.get('/:name', function(req, res, next) {
  var postName = req.params.name;

  res.render('posts', {
    content: PostsModel.getPost(postName)
  });
});

module.exports = router;
