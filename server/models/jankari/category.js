const mongoose = require('mongoose')
const jankariCategorySchema = new mongoose.Schema({
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
module.exports = mongoose.model('JankariCategory', jankariCategorySchema)