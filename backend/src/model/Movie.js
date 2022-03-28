const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    genres: [{type: String, required: true}],
    rate: {type: Number, required: true},
    storyLine: {type: String, required: true},
    category: {type: String, required: true},
    coverImgURL: {type: String, required: true},
    videoURL: {type: String, require: true},
})


module.exports = model("Movie", movieSchema);