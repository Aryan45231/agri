const { check} = require("express-validator");
exports.categoryValidator = [
    check('name').trim().not().isEmpty().withMessage("Invalid Details"),
    check('description').trim().not().isEmpty().withMessage("Invalid Details"),
    check('backgroundImage').trim().not().isEmpty().withMessage("Invalid Image URL please try again"),
    check('icon').trim().not().isEmpty().withMessage("Invalid Image URL please try again"),
];
exports.subCategoryValidator = [
    check('categoryId').trim().not().isEmpty().withMessage("Invalid category"),
    check('name').trim().not().isEmpty().withMessage("Invalid Details"),
    check('description').trim().not().isEmpty().withMessage("Invalid Details"),
    check('backgroundImage').trim().not().isEmpty().withMessage("Invalid Image URL please try again"),
    check('icon').trim().not().isEmpty().withMessage("Invalid Image URL please try again"),
];
exports.postValidator = [
    check('subCategoryId').trim().not().isEmpty().withMessage("Invalid category"),
    check('title').trim().not().isEmpty().withMessage("Invalid Details"),
    check('description').trim().not().isEmpty().withMessage("Invalid Details"),
    check('imgUrl').trim().not().isEmpty().withMessage("Invalid Image URL please try again"),
    check('youtubeUrl').trim().not().isEmpty().withMessage("Invalid  URL please try again"),
];