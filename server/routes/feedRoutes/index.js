// Liberaries
const express = require("express")
const app = express.Router()
// Validator
const feedValidation = require("../../middlewares/validations/feedValidation")
const { validationHandler } = require("../../middlewares/validations/validationHandler");
// Controller
const feedController = require("../../controllers/feedController")
// Routes
app.get("/:feedOwner_id/:pageNo",
    feedController.getFeeds
)
app.post("/",
    feedValidation.feedValidator,
    validationHandler,
    feedController.create
)
app.patch("/togglelike/:feedId",
    feedController.toggleLike
)
app.patch("/comment/:feedId",
    feedValidation.commentValidator,
    validationHandler,
    feedController.comment
)
module.exports = app