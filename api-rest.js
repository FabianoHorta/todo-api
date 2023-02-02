const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld', (req, res) => {
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send(['Lavar roupas', 'Limpar a casa', 'Passar roupa'])
})

app.get('/testeapi', (req, res) => {
    res.send('Testenado API.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})