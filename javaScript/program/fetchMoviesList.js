export const fetchMovies = async() => {

    try {

        const request = await fetch("http://localhost:5000/movies");

        if(!request.ok)throw new Error("Cannot load movies list");

        const data = await request.json();

        loadHomePageMovies(data.movies)
        
    } catch (error) {
        console.log("Error'as: ", error)
    }
}

const loadHomePageMovies = (movies) => {

    const ContainerDiv = Array.from(document.querySelectorAll(".movie-list-container"))

    ContainerDiv.forEach(element => {

        if(element.classList.contains("popular")){
            
            const filteredMovies = movies.filter(movie => movie.category === "most popular")
            PrintMovieData(filteredMovies, element);
        }
        else if(element.classList.contains("top-rated")){
            const filteredMovies = movies.filter(movie => movie.category === "top rated")
            PrintMovieData(filteredMovies, element);
            
        }
        
    });

}

const PrintMovieData = (selectedMovies, containerElement) => {


    const listWrapper = document.createElement("div");
    const list = document.createElement("div"); 
    
    listWrapper.classList.add("movie-list-wrapper");
    list.classList.add("movie-list")



    selectedMovies.forEach(movie => {
        
        const listItem = document.createElement("div");
        listItem.classList.add("movie-list-item");

        const image = document.createElement("img");
        image.setAttribute("src", `${movie.coverImgURL}`);
        image.classList.add("movie-list-item-img");
        listItem.appendChild(image);

        const movieDataElement = document.createElement("div");
        movieDataElement.classList.add("category-movies-item-data");
        
        const title = document.createElement("span");
        title.classList.add("movie-list-item-title");
        const titleText = document.createTextNode(`${movie.title}`);
        title.appendChild(titleText);

        const description = document.createElement("p");
        description.classList.add("movie-list-item-desc");
        const descriptionText = document.createTextNode(`${movie.rate}`);
        description.appendChild(descriptionText);

        const button = document.createElement("button");
        button.classList.add("movie-list-item-button");
        button.classList.add("details-btn")
        button.setAttribute("id", `${movie._id}`)
        const buttonText = document.createTextNode(`details`);
        button.appendChild(buttonText);

        movieDataElement.appendChild(title);
        movieDataElement.appendChild(button);

        listItem.appendChild(movieDataElement);


        list.appendChild(listItem);

    });

    const arrow = document.createElement("i");
    const arrowClasses = [ "fas", "fa-chevron-right", "arrow"];
    arrow.classList.add(...arrowClasses);
    

    listWrapper.appendChild(list);
    listWrapper.appendChild(arrow);
    containerElement.appendChild(listWrapper);

}


