const express = require("express")
const app = express()
const todoRouter = require("./src/routers/todoRouters")
const cors = require('cors')
require("dotenv").config()
require("./src/config/databaseConnection")

app.use(express.json())

app.use(cors())

app.use("/api", todoRouter)

app.get("/", (req, res) => {
    res.send("Hoş Geldiniz ...")
})

const port = process.env.PORT || 5001

app.listen(port, () => {
    console.log(`Server ${port} Portundan Başlatıldı ...` );
})
