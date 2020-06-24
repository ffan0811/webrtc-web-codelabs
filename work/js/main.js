'use strict';

const mediaStreamConstraints = {
    video: {
        "width": {
            "min": "1200",
        },
        "height": {
            "min": "640",
        }
    }
}

const localVideo = document.querySelector('video');

// The localStream object passed to getUserMedia() is in global scope, so you can inspect it from the browser console
let localStream;

function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    //the video stream from the webcam is set as the source of the video element:
    localVideo.srcObject= mediaStream;
}

function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}
//사용자에게 미디어 입력 장치 사용 권한을 요청하며, 사용자가 수락하면 요청한 미디어 종류의 트랙을 포함한 MediaStream을 반환
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError)