const express = require('express')
const app = express()
const port = 3000
const Path = require("path")


app.use('/users/:id', function (req, res, next) {
    if (req.params.id == 10) {
        const img = Path.join(__dirname, "src/static/beatiy.webp")
        res.sendFile(img, { root: "./src/static/beatiy.webp" })
        res.end()
    } else {
        res.send(`userID: ${req.params.id}`)
    }
})
app.use('/', express.static(Path.join(__dirname, 'src')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))