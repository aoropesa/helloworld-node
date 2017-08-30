const express = require('express');
const app = express();




//request params example
//localhost/randomstory?person=a&place=b
app.get('/randomstory/:person/', function(req, res){
  let {person} = req.params;
  res.end(`hello world`);
})



app.listen(80, function(){
  console.log('server listening....');
});
