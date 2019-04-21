'use strict'

// eslint-disable-next-line no-unused-vars
const hbs  = require('express-handlebars')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

let app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000

const demoData = require('./data/1-default')

// --- Middleware and Views ---

app.use(helmet())
app.use(logger('dev'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layout' })
app.use('/static', express.static(path.join(__dirname, '/static')))

// --- Routes ---

// app.get('/', (req, res) => {
// 	res.render('home', { title: 'Newton.js Dummy Server', body: 'Hello World' })
// })

// app.get('/data', (req, res) => {
// 	res.json(demoData)
// })

app.get('/', (req, res) => {
	res.render('editor', {
		data: JSON.stringify(demoData, null, '\t'),
		layout: false
	})
})

app.use((req, res, next) => {
	res.status(404)
		.render('home', {
			title: 'Oops - page not found',
			body: 'Go to the <a href="/">dummy data editor &rarr;</a>'
		})
})

// --- Connect ---

io.on('connection', function (socket) {
	console.log('socket.io: user connected')
	socket.on('network:data', function (data) {
		// io.emit('chat message', msg);
		console.log('Data was updated:')
		console.log(data)
  });
})

http.listen(3000, function () {
  console.log(`App listening on ${port}!`)
})
