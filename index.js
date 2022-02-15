const koa = require('koa')
const server = new koa()


const static = require('koa-static')

const Router = require('koa-router')

const route= new Router()

route.get('/', (ctx, next) => ctx.body = "Hello World")





server.use(route.routes())
server.use(static('./public'))

server.listen(3000,'localhost',()=>console.log('listening on port 3000'))