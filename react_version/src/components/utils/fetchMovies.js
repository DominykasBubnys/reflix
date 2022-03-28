

const fetchMovies = async(link) => {
    try {
        const request = await fetch(link);
    
        if(!request.ok)throw new Error("Cannot load movies list");
    
        return await request.json();
    
    
    } catch (error) {
        console.log("error'as: ", error)
    }
}

export default fetchMovies