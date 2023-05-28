const Feed = require("../../../models/feed/index.js")
const fs = require("fs")
// Admin controlls on Feed instance
exports.deleteFeed = async (req, res, next) => {
    try {
        const { feedId } = req.body
        const feed = await Feed.findById(feedId);
        if (!feed) {
            const err = new Error("Feed not found!");
            err.statusCode = 401;
            throw err;
        }
        await Feed.findByIdAndDelete(feedId)
        res.status(200).json({
            message: "Feed deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}
exports.updatedFeed = async (req, res, next) => {
    try {
        const { feedId, caption, imgurl } = req.body
        const feed = Feed.findById(feedId)
        if (!feed) {
            const err = new Error("Feed not found!");
            err.statusCode = 401;
            throw err;
        }
        let updatedFeed=null
        if (!imgurl) {
             updatedFeed = await Feed.findByIdAndUpdate(feedId, { $set: { caption } }, { new: true })
        }
        else {
             updatedFeed = await Feed.findByIdAndUpdate(feedId, { $set: { caption, imgurl } }, { new: true })
            
        }
        if (updatedFeed) {
            res.status(200).json({
                message: "Feed updated successfully"
            })
        }
    } catch (error) {
        next(error)
    }

}

