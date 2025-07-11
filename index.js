const express = require("express")
const path = require("path")
// const db = require(".config/db")
const db = require('./config/db');
const cookieParser = require("cookie-parser")

const port = 4400

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

<<<<<<< HEAD
app.use("/", express.static(path.join(__dirname, "/public")))
=======
app.use("/", express.static(path.join(__dirname, "public")))

// app.use('/dist', express.static(path.join(__dirname, 'dist')));
>>>>>>> 60cf6c6d041c70c8416bb851695733b6820fbba2
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", require("./routes/admin"))

app.listen(port, (err) => {
    if(err){
        console.log(err);
        return false
    }
    console.log("server is connected on port: " + port )
})