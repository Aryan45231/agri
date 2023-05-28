//Required Models for feed
const Feed = require("../../models/feed")
const Comment = require("../../models/feed/comment")
// API route to  create a new feed
exports.create = async (req, res, next) => {
    try {
        const user = req.user
        const { caption, imgurl } = req.body
        const feed = new Feed({ caption, imgurl, user: user._id })
        await feed.save()
        res.status(200).json({
            message: 'Feed created successfully'
        })
    } catch (error) {
        next(error)
    }
}

// API route to Get feeds 
exports.getFeeds = async (req, res, next) => {
    try {
        const user = req.user
        let feeds = []
        const { feedOwner_id, pageNo } = req.params
        const startIndex = (pageNo - 1) * 6;
        if (!feedOwner_id) {
            const err = new Error("Bad request");
            err.statusCode = 400;
            throw err;
        }
        else if (feedOwner_id === "*") {
            feeds = await Feed.find({}).populate("user").skip(startIndex).limit(6).sort({ _id: -1 })
        }
        else {
            feeds = await Feed.find({ user: feedOwner_id }).populate("user").skip(startIndex).limit(6).sort({ _id: -1 });
        }
        res.status(200).json({ feeds, message: "feed successfully shared" })
    } catch (error) {
        next(error)
    }
}

// API route to like a feed
exports.toggleLike = async (req, res, next) => {
    try {
        const user = req.user
        const feedId = req.params.feedId;
        const feed = await Feed.findById(feedId);
        if (!feed) {
            const err = new Error("Feed not fount !");
            err.statusCode = 401;
            throw err;
        }
        const userIndex = feed.likes.indexOf(user._id);
        if (userIndex !== -1) {
            feed.likes.splice(userIndex, 1);
        } else {
            feed.likes.push(user._id);
        }
        const updatedFeed = await feed.save();
        res.status(200).json(updatedFeed);
    } catch (error) {
        next(error)
    }
};

// API route for Comment on Feed
exports.comment = async (req, res, next) => {
    try {
        const feedId = req.params.feedId;
        const { comment } = req.body
        const user = req.user
        const feed = await Feed.findById(feedId);
        if (!feed) {
            const err = new Error("Feed not fount !");
            err.statusCode = 401;
            throw err;
        }

        const newComment = new Comment({
            comment,
            user: user._id,
            feed: feed._id,
        });

        const savedComment = await newComment.save();
        feed.comments.push(savedComment._id);
        const updatedFeed = await feed.save();
        res.status(200).json({ savedComment, updatedFeed });
    } catch (error) {
        next(error);
    }
};
