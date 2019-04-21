'use strict'

// eslint-disable-next-line no-unused-vars
const hbs  = require('express-handlebars')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

const port = process.env.PORT || 3000
let app = express()

app.use(helmet())
app.use(logger('dev'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layout' })

app.get('/', (req, res) => {
	res.render('home', { title: 'Newton.js Dummy Server', body: 'Hello World' })
})

app.use((req, res, next) => {
  res.status(404).send('Oops - page not found.')
})

app.listen(port, () => {
	console.log(`Express listening on port ${port}!`)
})
