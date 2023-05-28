const JankariSubCategeory = require("../../../models/jankari/subCategory")
const Post = require("../../../models/jankari/index")
// Function to Create jankari post
exports.create = async (req, res, next) => {
    try {
        const { title, description, imgUrl, youtubeUrl, subCategoryId } = req.body
        const subCategory = await JankariSubCategeory.findById(subCategoryId)
        if (!subCategory) {
            const err = new Error(" sub Category not found")
            err.statusCode = 400
            throw err
        }
        const post = await Post.create({ title, description, imgUrl, youtubeUrl,  subCategoryId })
        res.status(200).json({
            message: '  Post created siuccessfully',
            post
        })
    } catch (err) {
        next(err)
    }
}
// Function to Delete jankari post
exports.delete = async (req, res, next) => {
    try {
        const { postId } = req.params
        const post = await Post.findById(postId)
        if (!post) {
            const err = new Error("Post not found")
            err.statusCode = 404
            throw err
        }
        await Post.findByIdAndDelete(postId)
        res.status(200).json({
            message: 'Post deleted successfully',
        })
    } catch (err) {
        next(err)
    }
}
// function to update post

exports.update = async (req, res, next) => {
    try {
        const { postId } = req.params
        const { title, description, imgUrl, youtubeUrl, subCategoryId } = req.body
        const post = await Post.findById(postId)
        if (!post) {
            const err = new Error("Post not found")
            err.statusCode = 404
            throw err
        }
        const subCategory = await JankariSubCategeory.findById(subCategoryId)
        if (!subCategory) {
            const err = new Error(" sub Category not found")
            err.statusCode = 400
            throw err
        }
        await Post.findByIdAndUpdate(postId, { title, description, imgUrl, youtubeUrl, subCategoryId })
        res.status(200).json({
            message: 'Post updated successfully',
        })
    } catch (err) {
        next(err)
    }
}