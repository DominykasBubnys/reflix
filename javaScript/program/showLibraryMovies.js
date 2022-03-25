const libraryContainerElement = document.querySelector(".library-container");
import { RemovelibraryMovie } from "./firebase.js";

export const ShowLibraryMovies = (library) => {

    libraryContainerElement.innerHTML = ""

    console.log("library data: ", library);

    if(library.length > 0){

        library.forEach(movie => {
            const libraryContent = document.createElement("div");
            libraryContent.classList.add("library-data");

            const libraryMovieItem = document.createElement("div");
            libraryMovieItem.classList.add("library-movies-item");
            
            const libraryMovieItemImg = document.createElement("img");
            libraryMovieItemImg.setAttribute("src",`${movie.coverImgURL}`)
            libraryMovieItemImg.classList.add("library-movies-item-img");

            const libraryMovieItemData = document.createElement("div");
            libraryMovieItemData.classList.add("library-movies-item-data");

            const itemTitle = document.createElement("span");
            itemTitle.classList.add("library-movies-item-title");
            itemTitle.innerHTML = `${movie.title}`

            const itemDescription = document.createElement("p");
            itemDescription.classList.add("library-movies-item-desc");
            itemDescription.innerHTML = `${movie.storyLine}`

            const itemControllers = document.createElement("div");
            itemControllers.classList.add("library-controllers");

            const removeBtn = document.createElement("button");
            removeBtn.innerHTML = "Remove";
            removeBtn.classList.add("library-controllers-remove");
            removeBtn.setAttribute("id", movie._id);
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", RemovelibraryMovie);
        
            itemControllers.appendChild(removeBtn);

            libraryMovieItemData.appendChild(itemTitle);
            libraryMovieItemData.appendChild(itemDescription);

            libraryMovieItem.appendChild(libraryMovieItemImg);
            libraryMovieItem.appendChild(libraryMovieItemData);
            libraryMovieItem.appendChild(itemControllers);



            libraryContent.appendChild(libraryMovieItem);

            libraryContainerElement.appendChild(libraryContent)
        })
    }
    else if(library.length === 0){
        const header = document.createElement("h1");
        header.classList.add("library-header");
        header.innerHTML = "No selected movies";
        libraryContainerElement.appendChild(header);
    }
    else if(!library){
        const header = document.createElement("h1");
        header.classList.add("library-header");
        header.innerHTML = "Please log in";
        libraryContainerElement.appendChild(header);
    }
}

