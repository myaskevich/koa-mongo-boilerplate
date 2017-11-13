const Router = require('koa-router')

const router = new Router()

const controller = path => require(`./modules/${path}/controller`).routes()

router.use('/hello', controller('hello'))

module.exports = router
