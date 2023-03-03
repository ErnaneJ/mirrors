function startVideoFromCamera(){
  navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
      video.srcObject = stream;
      video.onloadedmetadata = () => video.play();
    });
  }).catch(error => console.log(error));
}

window.addEventListener("DOMContentLoaded", startVideoFromCamera);