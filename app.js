const express = require('express')
const path = require('path')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')
const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/new', newRouter)

app.listen(3000)
