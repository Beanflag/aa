var express = require('express');
var router = express.Router();
const Seq = require('./Seql.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getSeq', function(req, res, next) {
  let {type} = req.query
  if(!type){
    return res.send({code:0,msg:"参数不正确"})
  }
  let arr = Seq.filter(el=>el.type===Number(type))
  res.send({code:1,data:arr})
});
module.exports = router;
