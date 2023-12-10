const videoElement = window.document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play

async function selectMediaStream(){
    try {
        //constatns has media stream data. and we are waiting to assign that until 
        // the users selected which screen or window they want to share. 
        // 
        // for users to choose wich screen would be shared on its screen. 
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();

        // then we are passing that media stream into our video object as its source object
        videoElement.srcObject = MediaStream;
// then
        //when that video has loaded its metadata, its going to call a function that is going
        // to play video 
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }
    } catch (error) {
        // catch Error Here
        console.log('there is the ERROR', error);
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // 
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;

});

// on load

selectMediaStream();