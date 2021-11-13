const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('../'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/usuarios', (req, res, next) => {
    res.send( { 
        // ...req.body, //  receive data from FrontEnd
    } )
    next()
})

app.get('/usuarios', (req, res) => {

    res.send('enviando com sucesso')
})

app.listen(3000, () => {    
   console.log('conectado com sucesso...')
})