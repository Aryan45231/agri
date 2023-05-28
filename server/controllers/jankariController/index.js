const JankariCategory = require("../../models/jankari/category")
const JankariSubCategory = require("../../models/jankari/subCategory")
const Post = require("../../models/jankari/index")
// API funtion for fetching categories
exports.category = async (req, res, next) => {
    try {
        const { pageNo } = req.params
        if (!pageNo) {
            const error = new Error("Bad Request")
            error.statusCode = 400
            throw error
        }
        const startIndex = (pageNo - 1) * 6;
        const categories = await JankariCategory.find().skip(startIndex).limit(6).sort({ _id: -1 })
        if (!categories) {
            const error = new Error("  category not found")
            error.statusCode = 400
            throw error
        }
        res.status(200).json({
            message: "Category  fetched successfully",
            categories
        })
    } catch (err) {
        next(err)
    }
}
// API funtion for fetching sub categories
exports.subCategory = async (req, res, next) => {
    try {

        const { categoryId, pageNo } = req.params
        if (!categoryId && !pageNo) {
            const error = new Error("Bad Request")
            error.statusCode = 400
            throw error
        }
        const startIndex = (pageNo - 1) * 6;
        let subCategories = []
        if (categoryId === "*")
            subCategories = await JankariSubCategory.find().skip(startIndex).limit(6).sort({ _id: -1 })
        else {
            const category = await JankariCategory.findById(categoryId)
            if (!category) {
                const error = new Error("  category not found")
                error.statusCode = 400
                throw error
            }
            subCategories = await JankariSubCategory.find({ categoryId }).skip(startIndex).limit(6).sort({ _id: -1 });
        }
        res.status(200).json({
            message: "SubCategories fetched successfully",
            subCategories
        })
    } catch (err) {
        next(err)
    }
}

// // API funtion for fetching jankari Posts
exports.post = async (req, res, noxt) => {
    try {
        const { subCategoryId, pageNo } = req.params
        if (!subCategoryId && !pageNo) {
            const error = new Error("Bad Request")
            error.statusCode = 400
            throw error
        }
        const startIndex = (pageNo - 1) * 6;
        let posts = []
        if (subCategoryId === "*")
            posts = await Post.find().skip(startIndex).limit(6).sort({ _id: -1 })
        else {
            const subCategory = await JankariSubCategory.findById(subCategoryId)
            if (!subCategory) {
                const error = new Error("  Sub Category not found")
                error.statusCode = 400
                throw error
            }
            posts = await Post.find({ subCategoryId }).skip(startIndex).limit(6).sort({ _id: -1 });
        }
        res.status(200).json({
            message: "Posts fetched successfully",
            posts
        })
    } catch (err) {
        next(err)
    }
}