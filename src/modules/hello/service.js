const Hello = require('./hello.model')

function sayHello(name) {
  return `Hello, ${name}`
}

async function getAll() {
  return await Hello.find()
}

async function getOneByName(name) {
  return await Hello.findOne({ name })
}

async function create({ name }) {
  const message = sayHello(name)

  return await Hello.create({
    name,
    message,
  })
}

async function remove(name) {
  return await Hello.remove({ name })
}

module.exports = {
  getAll,
  getOneByName,
  create,
  remove,
}
