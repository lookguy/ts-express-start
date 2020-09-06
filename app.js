const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.set("views", path.resolve(__dirname, "src"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static(path.join(__dirname, "src")))

app.get("/views", (req, res, next) => {
    res.render("views", { user: { name: "彬彬" } })
})

app.use((request, response, next) => {
    console.log(request.body)
    console.log(typeof request.body)
    next()
})


app.use((request, response, next) => {
    response.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))