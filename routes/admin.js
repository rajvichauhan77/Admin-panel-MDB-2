const express = require("express")

const routes = express.Router()
const multer = require("multer")
const path = require("path")

routes.use(express.urlencoded())

const adminControllers = require("../controllers/adminControllers")

routes.get("/", adminControllers.home)

routes.get("/admin_table", adminControllers.adminTable)

routes.get("/admin_form", adminControllers.adminForm)

module.exports = routes