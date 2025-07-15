const express = require("express")

const routes = express.Router()
const multer = require("multer")
const path = require("path")

routes.use(express.urlencoded())

let uploadAvatar = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "uploads/")
    },
    filename:(req, file, cb) => {
        cb(null, Date.now()+"_"+file.originalname)
    }
})

let avatarImage = multer({storage: uploadAvatar}).single("avatar")



const adminControllers = require("../controllers/adminControllers")

routes.get("/", adminControllers.login)

routes.get("/dashboard", adminControllers.home)

routes.get("/admin_table", adminControllers.adminTable)

routes.get("/admin_form", adminControllers.adminForm)

routes.post("/insertAdmin", avatarImage, adminControllers.insertAdmin)

routes.get("/edit_admin", adminControllers.editAdmin)

routes.post("/updateAdmin/:id", avatarImage, adminControllers.updateAdmin)

module.exports = routes