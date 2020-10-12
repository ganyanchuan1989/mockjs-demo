let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock
let path = require('path');
let fs = require('fs')

let app = express();        //实例化express
app.use('/', function(req, res, next){
  console.log('>>url', req.url)
  next();
})
app.use(express.static(path.resolve(__dirname, './static')));

app.use('/get/json',function(req, res){
  console.log(fs.readFileSync('./data.json').toString())
  res.json(fs.readFileSync('./data.json').toString());

  // require('./data.json')
})


app.use('/get',function(req, res){
  console.log(req.url)
    res.json(Mock.mock({
        'status': 200,
        'dataSource|1-9':[{
            'key|+1': 1,
            'mockTitle|1':['肆无忌惮'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
})

app.use('/post',function(req, res){
  console.log(req.url)
    res.json(Mock.mock({
        'status': 200,
        'dataSource|1-9':[{
            'key|+1': 1,
            'mockTitle|1':['肆无忌惮'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    }))
})



app.listen('8090', () => {
    console.log('监听端口 8090')
})