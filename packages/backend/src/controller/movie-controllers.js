const Movie = require("../model/Movie");
const mongoose = require("mongoose");


const GET_getMovies = async (req,res,next) => {

    try {
        const moviesData = await Movie.find();
        res.send({movies: moviesData});
    } catch (err) {
        res.status(501).send({message: "failed to fetch all movies list"})
    }
}

const POST_addComment = async(req,res,next) => {
    // expecting to get movie id and new comment object
    const {id, comment} = req.body;

    if(!id || !comment) return res.status(501).send({message: "Make sure you are passing id and your comment"});

    let isMovieExist;

    try {

        isMovieExist = await Movie.findById(id);

        if(!isMovieExist)return res.status(501).send({message: "No movie with selected id"});
        
    } catch (error) {
        return res.status(501).send({message: error.message || "failed to get movie with selected id [line 30]"});
    }


    try {

        if(!comment.length || comment.length < 5)throw new Error("Invalid comment. Must contain at least 5 characters");

        await isMovieExist.comments.push(comment);

        await isMovieExist.save();
            
        return res.status(200).send({message: "Comment was added to movie successfuly"})

    } catch (error) {
        return res.status(501).send({message: error.message || "Backend returns an error .. Line 45"})
    }

}




const GET_getMovieById = async (req,res,next) => {

    const id = req.params.movie_id;

    try {
        const movie = await Movie.findById(id);

        if(movie) return res.status(200).send({movie: movie})

    } catch (error) {
        return res.status(501).send({message: error.message || "Backend returns an error ..Line 63"})
    }
}



// CHECKED
const POST_addNewMovie = async (req,res,next) => {

    const {title, genres, rate, storyLine, category, coverImgURL, videoURL } = (req.body);

    if(!title || !genres || !rate || !storyLine || !category || !coverImgURL || !videoURL) return res.send({message: "Bad inputs"});


    const newMovie = new Movie({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        genres: genres,
        storyLine: storyLine,
        rate: rate,
        category: category,
        coverImgURL: coverImgURL,
        videoURL: videoURL,
        comments: [],
    })

    let isMovieExist = await Movie.find({title: title});

    if(isMovieExist.length === 0){
        try {
            await newMovie.save();
                
            return res.status(200).send({message: "Movie was added to DB successfuly"})
    
        } catch (error) {
            return res.status(501).send({message: error.message || "Backend return an error .. Line 98"})
        }
    }
    else return res.send({message: "This movie already exists"});
    
}



exports.GET_getMovies = GET_getMovies;
exports.POST_addComment = POST_addComment;
exports.GET_getMovieById = GET_getMovieById;
exports.POST_addNewMovie = POST_addNewMovie;