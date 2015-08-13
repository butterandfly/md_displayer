'use strict';

let fs = require('fs');
let path = require('path');
let koa = require('koa');
let router = require('koa-router')();

let app = koa();

// 读取所有controllers
let controllers = [];
let controllersPath = path.join(__dirname, 'controllers');
fs.readdirSync(controllersPath).forEach(function(file) {
  let r = require('./controllers/' + file);
  router.use('', r.routes());
});

app.use(router.routes());

// 错误处理
app.on('error', function(err, ctx) {
  console.log('on error: ' + err);
});

// Start
app.listen(7000);
console.log('Server started...');
