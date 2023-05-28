const express = require("express")
const routes = express.Router()
const jankariController = require("../../controllers/jankariController")
routes.get("/category/:pageNo",  jankariController.category)
routes.get("/subCategory/:categoryId/:pageNo", jankariController.subCategory)
routes.get("/post/:subCategoryId/:pageNo", jankariController.post)
module.exports = routes