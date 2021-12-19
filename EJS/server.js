let express = require('express')
let app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
let data = require('./data.json')


app.get('/', (req, res) => {
    res.send(data)
})

app.get('/ejs', (req, res) => {
    res.render('index', {data})
})


app.post('/save', (req, res) => {
    console.log("im working", req.body)
    data.push(req.body)
    res.redirect('/ejs')
})


app.listen(5000, () => console.log('App running on localhost:5000'))