const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})