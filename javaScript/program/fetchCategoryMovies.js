
const categoryContainer = Array.from(document.querySelectorAll(".category-page"));

export const fetchCategoryMovies = async() => {


    try {
        const request = await fetch("http://localhost:5000/movies");

        if(!request.ok)throw new Error("Cannot load movies list");

        const data = await request.json();

        categoryContainer.forEach(element => {
            let categoryMovies;

            if(element.classList.contains("popular-page")){
                categoryMovies = data.movies.filter(movie => movie.category === "most popular")
            }
            if(element.classList.contains("trends-page")){
                categoryMovies = data.movies.filter(movie => movie.category === "top rated")
            }

            loadCategoryMovies(categoryMovies, element);
        });


    } catch (error) {
        console.log("error'as: ", error)
    }

    
}


const loadCategoryMovies = (movies, container) => {

    const moviesWrapper = document.createElement("div");
    moviesWrapper.classList.add("category-movies-container");

    movies.forEach(movie => {
        const movieItemElement = document.createElement("div");
        movieItemElement.classList.add("category-movies-item");

        const image = document.createElement("img");
        image.setAttribute("src", `${movie.coverImgURL}`);
        image.classList.add("movie-list-item-img");

        const movieDataElement = document.createElement("div");
        movieDataElement.classList.add("category-movies-item-data");
        
        const title = document.createElement("p");
        title.classList.add("movie-list-item-title");
        const titleText = document.createTextNode(`${movie.title}`);
        title.appendChild(titleText);

        const description = document.createElement("p");
        const descriptionText = document.createTextNode(`${movie.storyLine}`);
        description.appendChild(descriptionText);
        description.classList.add("movie-list-item-desc");
        
        

        const detailsButton = document.createElement("button");
        const detailsButtonText = document.createTextNode("Details");
        detailsButton.appendChild(detailsButtonText);
        detailsButton.classList.add("movie-list-item-button");
        detailsButton.classList.add("details-btn")
        detailsButton.setAttribute("id", `${movie._id}`)


        movieDataElement.appendChild(title);
        movieDataElement.appendChild(description);
        movieDataElement.appendChild(detailsButton);

        
        movieItemElement.appendChild(image);
        movieItemElement.appendChild(movieDataElement);
        


        moviesWrapper.appendChild(movieItemElement)

    })


    container.appendChild(moviesWrapper);

}