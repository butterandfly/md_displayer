'use strict';

const koaBody = require('koa-better-body');
const Router = require('koa-router');

let url = '/';

function *get() {
  this.body = "Hello Koa";
}

function *post() {
  //console.log(this.request.body);

  let postSeries = this.request.body.fields;

  let series = new Series({
    name: postSeries.name,
    desc: postSeries.desc
  });

  // 存入数据库
  yield series.save();

  this.status = 201;
}

let router = new Router({
  prefix: url
});

router.get('/', get);

module.exports = router;
