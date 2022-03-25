import { AddToLibraryHandler } from "./firebase.js";
import { ViewTrailerHandler} from "./trailer.js";
const addToLibraryButton = document.querySelector(".add-to-library-btn");
const viewTrailerButton = document.querySelector(".trailer-btn");

export const MovieDetails = () => {
    const detailsButton = Array.from(document.querySelectorAll(".details-btn"));

    console.log("MovieDetails was called")
    detailsButton.forEach(button => {
        button.addEventListener("click", detailsHandler)
    });

}


const detailsHandler = (event) => {
    const htmlContentContainer = Array.from(document.querySelectorAll(".content-container"))
    const movieId = event.target.id
    
    htmlContentContainer.forEach(container => {
        if(!container.classList.contains("hidden") && !container.classList.contains("details-page")){
            container.classList.add("hidden");
        }

        if(container.classList.contains("details-page") && container.classList.contains("hidden")){
            container.classList.remove("hidden")
        }

    });

    printMovieDetails(movieId)
}

let movieData; // storing a movie

const printMovieDetails = async(movieId) => {

    const container = document.querySelector(".details-wrapper");
    const loadingContainer = document.querySelector(".loading");
    if(loadingContainer.classList.contains("hidden"))loadingContainer.classList.remove("hidden");
    if(!container.classList.contains("hidden"))container.classList.add("hidden");

    try {
        const getMovieReq = await fetch(`http://localhost:5000/movie/${movieId}`);

        if(!getMovieReq.ok)throw new Error("Cannot load single movie");

        const getMovieRes = await getMovieReq.json();
        loadingContainer.classList.add("hidden");
        container.classList.remove("hidden")

        const htmlImage = document.querySelector(".details-page-image");
        htmlImage.setAttribute("src", `${getMovieRes.movie.coverImgURL}`);

        const htmlTitle = document.querySelector(".details-page-title");
        htmlTitle.innerHTML = getMovieRes.movie.title

        const htmlRate = document.querySelector(".details-page-rate")
        htmlRate.innerHTML = getMovieRes.movie.rate

        const htmlDescription = document.querySelector(".details-page-description");
        htmlDescription.innerHTML = getMovieRes.movie.storyLine;

        
        addToLibraryButton.addEventListener("click", addToLibrary)
        viewTrailerButton.addEventListener("click", ViewTrailerHandler.bind(null, getMovieRes.movie.videoURL));

        movieData =  getMovieRes.movie;

    } catch (error) {
        alert(error.message || "Unexpected error in movie details");
        
    }



}


const addToLibrary = async() => {
    try {
        await AddToLibraryHandler(movieData)
    } catch (error) {
        alert(error.message || "Cannot add movie to library");
    }
}

