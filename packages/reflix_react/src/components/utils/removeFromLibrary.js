const removeFromlibrary = async(movie, uid) => {
    
    const RequestResult = {
        statusOK: false,
        message: null
    }

    if(!movie || !uid) return RequestResult;

    
  
    try {
       const request = await fetch(`http://localhost:5000/library/remove-movie`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({ movie: movie, uid: uid})
        }
      )
      const resultUser = await request.json();
  
      if(!request.ok){
        RequestResult.statusOK = false;
        RequestResult.message = (resultUser.message || "Request failed");
  
        return RequestResult;
      }
  
      RequestResult.statusOK = true;
      RequestResult.message = ("Movie was successfuly removed from library");
  
      return RequestResult;
  
  
    } catch (err) {
        console.log("Error: ", err);
      //Alert.alert(err.message || "Cannot add to library");
    }
  
  }
  
  export default removeFromlibrary;