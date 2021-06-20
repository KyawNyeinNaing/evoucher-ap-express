const express = require('express')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')
const sassConfig = require('./config')
const logger = require('./logger')
const expressEjsLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const xss = require('xss-clean')

const apiRoutes = require('./routes/api.route')
const webRoute = require('./routes/web.route')

const globalErrHandler = require('./controllers/error.controller')
const AppError = require('./utils/appError')
const app = express()

app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/style'))

app.use(express.urlencoded({ extended: true }));

// scss
app.use(sassConfig)

// init middleware
app.use(logger)

// Allow Cross-Origin requests
app.use(cors())

// Data sanitization against Nosql query injection
app.use(mongoSanitize())

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss())

// Prevent parameter pollution
app.use(hpp())


// Api route
app.use('/api', apiRoutes)

// Web route
app.use('/', webRoute)

// handle undefined Routes
app.use('*', (req, res, next) => {
	const err = new AppError(404, 'fail', 'undefined route')
	next(err, req, res, next)
})

app.use(globalErrHandler)

module.exports = app