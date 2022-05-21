
const fetchMovies = async() => {

    const resp = {
        ok: false,
        message: null,
        data: null
    }

    try {

        const req = await fetch("https://reflix-database.herokuapp.com/movies");

        if(!req.ok)throw new Error("Failed to load movies");

        const movies = await req.json();
        resp.ok = true;
        resp.message = null
        resp.data = movies.movies;
        
        
    } catch (error) {
        resp.ok = false;
        resp.message = error || "Unexpected error"
        resp.data = null;
    }


    return resp;

}

export default fetchMovies;