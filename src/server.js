const express = require('express') // import express
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, pageSaveClass } = require('./pages')

// Server
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static("public")) // this is a server config
// define public folder as the location of the static files
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", pageSaveClass)
.listen(5500) // set up 5500 for access port
