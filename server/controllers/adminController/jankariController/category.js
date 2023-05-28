const JankariCategory = require("../../../models/jankari/category")
const JankariSubCategeory = require("../../../models/jankari/subCategory")
const Post = require("../../../models/jankari/index")
// Function to create Jankari Category
exports.create = async (req, res, next) => {
    try {
        const { name, description, backgroundImage, icon } = req.body
        const category = await JankariCategory.create({ name, description, backgroundImage, icon })
        res.status(200).json({
            message: ' Category created siuccessfully',
            category
        })
    } catch (err) {
        next(err)
    }
}
// Function to Delete Jankari Category
exports.delete = async (req, res, next) => {
    try {
        const { categoryId } = req.params
        const category = await JankariCategory.findById(categoryId)
        if (!category) {
            const err = new Error("category not found")
            err.statusCode = 404
            throw err
        }
        await JankariCategory.findByIdAndDelete(categoryId)
        res.status(200).json({
            message: 'Category deleted successfully',
        })
    } catch (err) {
        next(err)
    }
}
// function to Update Jankari SubCategory 
exports.update = async (req, res, next) => {
    try {
        const { categoryId } = req.params
        const { name, description, backgroundImage, icon } = req.body
        const category = await JankariCategory.findById(categoryId)
        if (!category) {
            const err = new Error("category not found")
            err.statusCode = 404
            throw err
        }
        category.name = name
        category.description = description
        category.backgroundImage = backgroundImage
        category.icon = icon
        await category.save()
        res.status(200).json({
            message: 'Category updated successfully',
        })
    } catch (err) {
        next(err)
    }
}