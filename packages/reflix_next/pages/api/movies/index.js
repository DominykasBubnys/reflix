import { MongoClient } from "mongodb";

const handler = async(req,res) => {

    const client = await MongoClient.connect(`mongodb+srv://dombub1:dombub1@cluster0.4afhm.mongodb.net/reflix?retryWrites=true&w=majority`)

    const db = client.db()

    const reflixCollection = db.collection("movies");

    try {
        const allMovies = await reflixCollection.find().toArray();

        if(!allMovies) throw new Error("Failed to fetch all movies");

        client.close();

        return res.status(200).json({movies: allMovies});

    } catch (error) {
        console.log("Error in index.js api: ", error);
        return res.status(500).json({message : error});
    }


}

export default handler;