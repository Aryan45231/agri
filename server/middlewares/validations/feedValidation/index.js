const { check} = require("express-validator");
exports.feedValidator = [
    check('caption').trim().not().isEmpty().withMessage("Invalid Caption"),
    check('imgurl').trim().not().isEmpty().withMessage("Invalid Image URL please try again"),
];
exports.commentValidator = [
    check('comment').trim().not().isEmpty().withMessage("Invalid comment"),
];