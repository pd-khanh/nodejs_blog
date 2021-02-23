const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => {
    var a = 4;
    var b = 2;
    var c = a + b;
    res.send('Hello World') 
})

app.get('/app', (req, res) => res.send('This is APP page') )

app.get('/toan/bai-tap-1', (req, res) => res.send('This is Bai Tap 1') )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))