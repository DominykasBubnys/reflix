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

const POST_getLibrary = async (req,res,next) => {
    return res.send("Library");
}




const GET_getMovieById = async (req,res,next) => {

    const id = req.params.movie_id;

    try {
        const movie = await Movie.findById(id);

        if(movie) return res.status(200).send({movie: movie})

    } catch (error) {
        return res.status(501).send({message: error.message || "Backend return an error ..Line 60"})
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
        videoURL: videoURL
    })

    let isMovieExist = await Movie.find({title: title});

    if(isMovieExist.length === 0){
        try {
            await newMovie.save();
                
            return res.status(200).send({message: "Movie was added to DB successfuly"})
    
        } catch (error) {
            return res.status(501).send({message: error.message || "Backend return an error .. Line 91"})
        }
    }
    else return res.send({message: "This movie already exists"});
    
}



// CHECKED
const POST_addToLibrary = async(req,res,next) => {

    res.send("Adding to library");
}


const POST_removeLibraryMovie = async(req,res,next) => {
    return res.send("Remove from library");
}


exports.GET_getMovies = GET_getMovies;
exports.POST_getLibrary = POST_getLibrary;
exports.GET_getMovieById = GET_getMovieById;
exports.POST_addNewMovie = POST_addNewMovie;
exports.POST_addToLibrary = POST_addToLibrary;
exports.POST_removeLibraryMovie = POST_removeLibraryMovie