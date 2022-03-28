import { useEffect, useState } from "react";
import Intro from "../components/intro/intro";
import IntroList from "../components/introList/introList";
import LoadingSpinner from "../components/loadingSpinner"
import ErrorModal from "../components/errorModal"
import { MongoClient } from "mongodb";

const Home = (props) => {
    return <>
        <div>
            <Intro />
            <IntroList data={props.data} category="most popular" />
            <IntroList data={props.data} category="top rated" />
        </div>          
    </>
}

export const getStaticProps = async()=> {

    const client = await MongoClient.connect(`mongodb://dombub1:dombub1@cluster0-shard-00-00.4afhm.mongodb.net:27017,cluster0-shard-00-01.4afhm.mongodb.net:27017,cluster0-shard-00-02.4afhm.mongodb.net:27017/reflix?ssl=true&replicaSet=atlas-14l6ii-shard-0&authSource=admin&retryWrites=true&w=majority`)

    const db = client.db()

    const reflixCollection = db.collection("movies");


    let allMovies;

    try {
        allMovies = await reflixCollection.find().toArray();

        if(!allMovies) throw new Error("Failed to fetch all movies");

        client.close();

    } catch (error) {
        console.log("Error in index.js api: ", error);
        return res.status(500).json({message : error});
    }


    return{
        props:{
            data: allMovies ? allMovies.map(movie => ({
                id: movie._id.toString(),
                title: movie.title,
                genres: movie.genres,
                rate: movie.rate,
                storyLine: movie.storyLine,
                category: movie.category,
                coverImgURL: movie.coverImgURL,
                videoURL: movie.videoURL

            })) : []
        },
    }

}

export default Home;