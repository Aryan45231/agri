const mongoose = require('mongoose');
const JankariSchema = new mongoose.Schema({
    subCategoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"JankariSubCategory",
    required: true
   },
    title:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtubeUrl:{
        type: String,
        required: false
    },  
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Post', JankariSchema);