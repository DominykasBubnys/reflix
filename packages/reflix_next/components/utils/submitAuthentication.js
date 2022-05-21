const submitAuthentication = async(mode, values) => {

    //console.log("Mode: ", mode, " | values: ", values);
    const fetchUrl = (mode ? "http://localhost:5000/login" : "http://localhost:5000/sign-up");

    //console.log("FetchUrl: ", fetchUrl)
    try {        
        const authRequest = await fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })

        const authResponse = await authRequest.json();

        if(!authRequest.ok)throw new Error(authResponse.message || "Unexpected error")

        return authResponse.user
        
    } catch (error) {
        return `${error.message || "Unexpected error"}`
    }


}


export default submitAuthentication;