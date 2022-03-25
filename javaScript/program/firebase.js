    const homePage = document.querySelector(".home-page");
    const authPage = document.querySelector(".authenticate-page")
    const menuNav = Array.from(document.querySelectorAll(".menu-list-item"));
    const LogoutBtn = document.querySelector(".logout");
    const authenticateBtn = document.querySelector(".authenticate");

    import { ShowLibraryMovies } from "./showLibraryMovies.js";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
    import { getDatabase, set, ref, get, onValue,remove, child } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBiE5n47xyVekgA8sqJNlQu-ICP19mDuBI",
        authDomain: "reflix-js-auth.firebaseapp.com",
        databaseURL: "https://reflix-js-auth-default-rtdb.firebaseio.com",
        projectId: "reflix-js-auth",
        storageBucket: "reflix-js-auth.appspot.com",
        messagingSenderId: "1085268825560",
        appId: "1:1085268825560:web:35000c34d1bcb525358ead"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();


    onAuthStateChanged(auth, (user) => {
        if (user) {
            GetLibraryMovies(true);
            LogoutBtn.classList.remove("hidden");
            if(!authenticateBtn.classList.contains("hidden"))authenticateBtn.classList.add("hidden");
        } else {
            GetLibraryMovies(false);
            if(!LogoutBtn.classList.contains("hidden"))LogoutBtn.classList.add("hidden");
            if(authenticateBtn.classList.contains("hidden"))authenticateBtn.classList.remove("hidden");
        }

    });



    export const SignUpHandler = async(username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email,
        })
        submitForm();
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        });
    }


    export const LoginHandler = async(email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            submitForm();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
    }

    export const LogoutHandler = async() => {
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
            alert(error.message || "logging out fails");
        });
        authenticateBtn.classList.remove("hidden");
        if(!LogoutBtn.classList.contains("hidden"))LogoutBtn.classList.add("hidden");
        submitForm();
    }


    const submitForm = () => {
        homePage.classList.remove("hidden");
        authPage.classList.add("hidden");
        if(!authenticateBtn.classList.contains("hidden"))authenticateBtn.classList.add("hidden");
        LogoutBtn.classList.remove("hidden")
        menuNav.forEach(link => link.classList.remove("active"))
    }


    export const GetLibraryMovies = async(isLoggedIn) => {
        const user = auth.currentUser;
        const db = getDatabase();

        if(isLoggedIn){
            onValue(ref(db, `users/${user.uid}/library`), (snapshot) => {
                let library;
                if(snapshot.exists()){
                    library = snapshot.val();
                }
                else library = [];
                ShowLibraryMovies(Object.values(library))
            });
        }
        else ShowLibraryMovies(false)
        
    }

    export const RemovelibraryMovie = async(event) => {
        const user = await getAuth().currentUser;

        const movie_id = event.target.id;
        const db = getDatabase();

        try {
            await remove(ref(db, `users/${user.uid}/library/${movie_id}`));

            
        } catch (error) {
            alert(error.message || "Unexpected error");
        }
    }


    export const AddToLibraryHandler = async(movie) => {
        const user = await getAuth().currentUser;
        const dbRef = ref(getDatabase());

        if(user){
            get(child(dbRef, `users/${user.uid}/library/${movie._id}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    return alert("This movie already added");
                } else {
                    try {
                        set(ref(database, 'users/' + user.uid + "/library/" + movie._id),{
                            ...movie
                        })
                        alert("New movie was added")
                    } catch (error) {
                        console.log("error occured: ", error);
                    }
                }
            }).catch((error) => {
                alert("cannot add to library");
            });   
        }
        else alert("Please log in")
    }