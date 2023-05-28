const mongoose = require('mongoose')
const jankariSubCategorySchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JankariCategory",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('JankariSubCategory', jankariSubCategorySchema)