const express = require('express')
const path = require('path')
const http = require('http')
const router = require('./router')
 
class App {
  constructor () {
    this.express = express()
    this.http = http.Server(this.express)
    this.middlewares()
    this.router()
  }
 
  router () {
    this.express.use(router)
  }
 
  middlewares () {
    this.express.use(express.json({ limit: '50mb' }))
    this.express.use(express.urlencoded({ limit: '50mb', extended: true }))
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }
}
module.exports = new App().http