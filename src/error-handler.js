async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    // handle validation error
    if (err && err.name === 'ValidationError' && err.isJoi) {
      ctx.throw(400, err.message)

    // all other internal errors
    } else {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  }
}

module.exports = errorHandler
