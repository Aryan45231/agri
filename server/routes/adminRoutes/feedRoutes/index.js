const express = require("express"),
 app = express.Router(),
 adminController = require("../../../controllers/adminController/feedController/index")
 
app.delete("/" , adminController.deleteFeed )
app.patch("/", adminController.updatedFeed )
module.exports = app 