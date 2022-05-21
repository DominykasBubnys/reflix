
import classes from "./Profile.module.css";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import { useAuth } from "../components/context/AuthorContext";

const Profile = () => {

    const Auth = useAuth();

    console.log("Auth : ", Auth);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(null);


    return(
        <React.Fragment>            
            { Auth.currentUser && 
                <div className={classes.container}>
                    <div>
                        <img className={classes.image} src={require("../assets/profile.png")} />
                    </div>

                    <div className={classes.content}>
                        
                        <div className={classes.email}>
                            <h3>Email:</h3>
                            <h1>{Auth.currentUser.email}</h1>
                        </div>

                        <div className={classes.status}>
                            <h3>Status:</h3>
                            <h1>{Auth.currentUser ? "Loged in" : null}</h1>
                        </div>
                        
                    </div>
                </div>
            }

            {!Auth.currentUser && <h1>Please login</h1>}

        </React.Fragment>
    )
}

export default Profile;