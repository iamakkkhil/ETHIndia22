const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/', (req, res) => {
    var data = req.body

    console.log("heading: ", data.heading);
    console.log("desc: ", data.desc);
    console.log("ytLink: ", data.ytLink);
    console.log("pLink: ", data.pLink);

    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})