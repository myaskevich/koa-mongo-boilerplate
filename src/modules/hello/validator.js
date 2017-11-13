const validator = require('koa-context-validator').default
const { object, string } = require('koa-context-validator')

const validateCreate = validator({
  body: object().keys({
    name: string().required(),
  })
})

module.exports = {
  validateCreate,
}
