const Koa = require('koa')
const logger = require('koa-logger')
const koaBody = require('koa-body')

// create new app
const app = new Koa()

const router = require('./router')
const errorHandler = require('./error-handler')

app.use(logger())
app.use(koaBody())

// register error handler (should come first)
app.use(errorHandler)

// register known routes
app.use(router.routes())
app.use(router.allowedMethods())

// handle 404 case
app.use(async ctx => ctx.throw(404, 'Not found'))

app.listen(3000)
