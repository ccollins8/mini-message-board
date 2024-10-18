const { Router } = require('express')
const path = require('path')

const indexRouter = Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

indexRouter.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})
indexRouter.get('/messages/:messageId', (req, res) => {
    console.log(req.params.messageId)
    res.render("details", {message: messages[req.params.messageId]})
})
indexRouter.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/')
})

module.exports =  indexRouter;