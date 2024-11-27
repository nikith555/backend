require('dontenv').config()
const express = require('express')
const app = express();
const port =3500

app.get('/',(req, res) => {
    res.send('Hello World!')
})
app.get('/login',(req, res) => {
    res.send("Hello Nikhith")
})
app.get('/youtube',(req,res) => {
    res.send("<h1>Backend</h1>")
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)

})