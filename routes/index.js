
/*
 * GET home page.
 */

exports.index = function(req, res){
  var Firebase = require('firebase');
  var myRootRef = new Firebase('https://mailo-first-express-node.firebaseIO.com');
  var visitors = myRootRef.child('visitors');
  
  var newVisitor = visitors.push({"date": (new Date()).getTime()});
  
  res.render('index', { title: 'Fire Chat', visitorsReference: visitors});
};