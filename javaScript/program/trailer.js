const trailerContainer = document.querySelector(".trailer-container");
const contentContainer = document.querySelector(".container")

export const ViewTrailerHandler = (videoURL) => {

    const closeTrailerHandler = (event) => {

        const isClickInsideElement = trailerContainer.contains(event.target);
        const isClickButtonElement = document.querySelector(".trailer-btn").contains(event.target);
        if(!isClickInsideElement && !isClickButtonElement){
            contentContainer.classList.remove("hidden");
            trailerContainer.classList.add("hidden")
            videos.pause()

        }
    }

    const videos = document.getElementById("video");
    const srcs = document.createAttribute("src");
    srcs.value = videoURL;
    videos.setAttributeNode(srcs);

    console.log("Traileris: ", videoURL);
    trailerContainer.classList.remove("hidden");
    contentContainer.classList.add("hidden");
    document.addEventListener("click", closeTrailerHandler);
}

