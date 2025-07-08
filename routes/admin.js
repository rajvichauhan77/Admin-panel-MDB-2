const express = require("express")

const routes = express.Router()
const multer = require("multer")
const path = require("path")
const adminTbl = require("../models/adminTbl")

routes.use(express.urlencoded())

const adminControllers = require("../controllers/adminControllers")

routes.get("/", adminControllers.home)

module.exports = routes