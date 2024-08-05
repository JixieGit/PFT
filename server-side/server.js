const express = require('express')
const path = require('path')
const app = express()
const port = 8080

let publicPath = "/home/jxie/PFT/"

app.use(express.static(publicPath + 'client-side'))

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}client-side/public/index.html`)
 })
app.get('/signup', (req,res) => {

})
app.get('/signin', (req,res) => {

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})