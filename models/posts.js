var marked = require('marked');
var fs = require('fs');
var path = require('path');

module.exports = {
  getPost: function(name){
    var filePath = path.join(__dirname, '../markdown/'+name+'.md');
    var posts = fs.readFileSync(filePath, 'utf8')
    return marked(posts);
  }
};
