const express = require("express"),
    routes = express.Router()
// Controller
const categoryController = require("../../../controllers/adminController/jankariController/category")
const subCategoriesController = require("../../../controllers/adminController/jankariController/subCategory")
const postController = require("../../../controllers/adminController/jankariController/post")
// Validators and ValidationHandlers
const jankariValidation = require("../../../middlewares/validations/jankariValidation")
const { validationHandler } = require("../../../middlewares/validations/validationHandler")
// Create Routes for Jankari 
routes.post("/category",
    jankariValidation.categoryValidator,
    validationHandler,
    categoryController.create
)
routes.post("/subCategory",
    jankariValidation.subCategoryValidator,
    validationHandler,
    subCategoriesController.create
)
routes.post("/post",
    jankariValidation.postValidator,
    validationHandler,
    postController.create
)
// Update Routes for Jankari
routes.patch("/category/:categoryId",
    jankariValidation.categoryValidator,
    validationHandler,
    categoryController.update
)
routes.patch("/subCategory/:subCategoryId",
    jankariValidation.subCategoryValidator,
    validationHandler,
    subCategoriesController.update
)
routes.patch("/post/:postId",
    jankariValidation.postValidator,
    validationHandler,
    postController.update
)
// Delete Routes for Jankari
routes.delete("/category/:categoryId", categoryController.delete)
routes.delete("/subCategory/:subCategoryId", subCategoriesController.delete)
routes.delete("/post/:postId", postController.delete)


module.exports = routes 
