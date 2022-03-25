const navLinks = Array.from(document.querySelectorAll(".menu-list-item"));
const navPages = Array.from(document.querySelectorAll(".content-container"));

import {fetchMovies} from "./program/fetchMoviesList.js";
import {fetchCategoryMovies} from "./program/fetchCategoryMovies.js";
import {MovieDetails} from "./program/MovieDetails.js"
// import {LibraryMovies} from "./program/fetchLibraryMovies.js";


(async() => {

    try {
        await fetchMovies();
        await fetchCategoryMovies();
        // await LibraryMovies();
        MovieDetails();


    } catch (error) {
        console.log(error)
    }

})()



const markLink = (link) => {
    link.classList.add("active");
    navLinks.forEach(element => {
        if(element !== link)element.classList.remove("active");
    });
}


const showContent = (link) => {
    navPages.forEach(page => {
        if(!page.classList.contains("hidden"))page.classList.add("hidden");
    });

    navPages.forEach(page => {
        if(page.classList.contains(link.id))page.classList.remove("hidden");
    });
}


const linkClickHandler = (event) => {
    markLink(event.target);
    showContent(event.target)
}


navLinks.forEach(link => {
    link.addEventListener("click", linkClickHandler)
});