const { default: mongoose, mongo } = require("mongoose")
const app = require("./app")
const Database = require("./database")
const port = process.env.PORT || 8000
try {
    Database.connect()
    console.log("db connected")
    app.listen(port, () => { console.log("server connected 8000") })
} catch (e) {
    console.log("error")
}