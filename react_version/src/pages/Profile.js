
import classes from "./Profile.module.css";
import React, { useContext, useEffect, useState } from "react";
//import { AuthContext } from "../components/context/AuthContext";
import LoadingSpinner from "../components/loadingSpinner";

const Profile = () => {

    // const Auth = useContext(AuthContext);
    // const [isLoading, setIsLoading] = useState(false);
    // const [data, setData] = useState(null);
    // const [isError, setIsError] = useState(null);

    // useEffect(() => {

    //     const loadUserData = async() => {
    //         setIsLoading(true);

    //         const authResp = await fetch(`http://localhost:5000/user/${Auth.userId}`);

    //         const authData = await authResp.json();
    //         if(!authResp.ok)throw new Error(authData.message || "Something is going wrong");

    //         setData(authData.user);
    //         setIsLoading(false)
    //     }

    //     if(Auth.isLoggedIn)loadUserData();
        
    // }, [])


    // return(
    //     <React.Fragment>
    //         {isLoading && <LoadingSpinner asOverlay />}
            
    //         { !isLoading && data && Auth.isLoggedIn && 
    //             <div className={classes.container}>
    //                 <div>
    //                     <img className={classes.image} src={require("../assets/profile.png")} />
    //                 </div>

    //                 <div className={classes.content}>

    //                     <div className={classes.name}>
    //                         <h3>Name:</h3>
    //                         <h1>{data.name}</h1>
    //                     </div>
                        
    //                     <div className={classes.email}>
    //                         <h3>Email:</h3>
    //                         <h1>{data.email}</h1>
    //                     </div>

    //                     <div className={classes.library}>
    //                         <h3>library:</h3>
    //                         {data.library.length === 0 && <h1 className={classes.no_movies}>You do not have saved any movies!</h1>}
    //                         {data.library.length > 0 && <h1>You have {data.library.length} added movies!</h1>}
    //                     </div>
                        
    //                 </div>
    //             </div>
    //         }

    //         {!Auth.isLoggedIn && <h1>Please login</h1>}

    //     </React.Fragment>
    // )

    return <h1>
        Profile
    </h1>
}

export default Profile;