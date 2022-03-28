const addToLibrary = async(movie, uid) => {

    console.log("addToLibrary occurred, movie: ", movie, " | uid: " , uid);

    const RequestResult = {
      statusOK: false,
      user: null,
      message: null
    }
  
    try {
       const request = await fetch(`http://localhost:5000/library/add-movie`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({ movie: movie, uid: uid})
        }
      )
      const resultUser = await request.json();

      console.log("Inside fnc body: ", resultUser)
  
      if(!request.ok){
        RequestResult.statusOK = false;
        RequestResult.user = null;
        RequestResult.message = (resultUser.message || "Request failed");
  
        return RequestResult;
      }
  
      RequestResult.statusOK = true;
      RequestResult.user = resultUser.user;
      RequestResult.message = ("Movie was successfuly added to library");
  
      return RequestResult;
  
  
    } catch (err) {
        console.log("Error: ", err);
      //Alert.alert(err.message || "Cannot add to library");
    }
  
  }
  
  export default addToLibrary;