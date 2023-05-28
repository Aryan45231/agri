const JankariCategory = require("../../../models/jankari/category")
const JankariSubCategeory = require("../../../models/jankari/subCategory")
// Function to create  Jankari Sub Catogary
exports.create = async (req, res, next) => {
    try {
        const { name, description, backgroundImage, icon, categoryId } = req.body
        const category = await JankariCategory.findById(categoryId)
        if (!category) {
            const err = new Error("Category not found")
            err.statusCode = 400
            throw err
        }
        const SubCategory = await JankariSubCategeory.create({ name, description, backgroundImage, icon, categoryId })
        res.status(200).json({
            message: ' SubCategory created siuccessfully',
            SubCategory
        })
    } catch (err) {
        next(err)
    }
}
// Function to Delete  Jankari Sub Catogary
exports.delete = async (req, res, next) => {
    try {
        const { subCategoryId } = req.params
        const subCategory = await JankariSubCategeory.findById(subCategoryId)
        if (!subCategory) {
            const err = new Error("subCategory not found")
            err.statusCode = 404
            throw err
        }
        await JankariSubCategeory.findByIdAndDelete(subCategoryId)
        res.status(200).json({
            message: 'subCategory deleted successfully',
        })
    } catch (err) {
        next(err)
    }
}
// Function to update the sub category

exports.update = async (req, res, next) => {
    try {
        const { subCategoryId } = req.params
        const { name, description, backgroundImage, icon , categoryId } = req.body
        const subCategory = await JankariSubCategeory.findById(subCategoryId)
        if (!subCategory) {
            const err = new Error("subCategory not found")
            err.statusCode = 404
            throw err
        }
        const category = await JankariCategory.findById(categoryId)
        if (!category) {
            const err = new Error("Category not found")
            err.statusCode = 400
            throw err
        }
        subCategory.name = name
        subCategory.description = description
        subCategory.backgroundImage = backgroundImage
        subCategory.icon = icon
        subCategory.categoryId = categoryId
        await subCategory.save()
        res.status(200).json({
            message: 'subCategory updated successfully',
        })
    } catch (err) {
        next(err)
    }
}