const getAuthLibrary = async(uid) => {


    const RequestResult = {
        statusOK: false,
        library: null,
        message: null
    }

    if(!uid){
        RequestResult.statusOK = false;
        RequestResult.library = null;
        RequestResult.message = "User id is not provided";

        return RequestResult;
    }

    try {
        const getLibraryReq = await fetch(`http://localhost:5000/auth-library`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid})
        })

        const getLibraryRes = await getLibraryReq.json();

        
        if(!getLibraryReq.ok) throw new Error(getLibraryRes.message ||"Backend request returns an error");


        RequestResult.statusOK = true;
        RequestResult.library = getLibraryRes.library;
        RequestResult.message = "library was send successfuly";


    } catch (error) {

        RequestResult.statusOK = false;
        RequestResult.library = null;
        RequestResult.message = error.message || "library was not found";
    }

    return RequestResult;
  
  }
  
  export default getAuthLibrary;