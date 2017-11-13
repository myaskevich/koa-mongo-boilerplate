const Router = require('koa-router')

const router = new Router()

const validator = require('./validator')
const service = require('./service')

router.get('/', getAll)
router.get('/:name', getOne)
router.post('/', validator.validateCreate, create)
router.delete('/:name', remove)

async function getAll(ctx) {
  ctx.body = await service.getAll()
}

async function getOne(ctx) {
  ctx.body = await service.getOneByName(ctx.params.name)
}

async function create(ctx) {
  ctx.body = await service.create(ctx.request.body)
}

async function remove(ctx) {
  ctx.body = await service.remove(ctx.params.name)
}

module.exports = router
