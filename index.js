
var url = "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8";
var video = document.getElementById("videoPlayer"); // Change the ID to "videoPlayer"
var playButton = document.getElementById("playButton"); // Change the ID to "playButton"

window.onload = function() {
    var player = new AAMPMediaPlayer();
   // player.load(url);

    playButton.addEventListener("click", function() {
        console.log('click');
        togglePlayPause();
    });

    playButton.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            player.load(url);
            console.log('enter');
            togglePlayPause();
        }
    });

    function togglePlayPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
};



class AAMPMediaPlayer {

    load(uri) {
        console.log("Invoked load");
    }

    initConfig(IConfig) {
        console.log("Invoked initConfig");
    }

    play() {
        console.log("Invoked play");
    }

    pause() {
        console.log("Invoked pause");
    }

    stop() {
        console.log("Invoked stop");
    }

    release() {
        console.log("Invoked release");
    }

    seek(timeSec) {
        console.log("Invoked seek");
    }

    getCurrentState() {
        console.log("Invoked getCurrentState");
    }

    getDurationSec() {
        console.log("Invoked getDurationSec");
    }

    getCurrentPosition() {
        console.log("Invoked getCurrentPosition");
    }

    getVideoBitrates() {
        console.log("Invoked getVideoBitrates");
    }

    getAudioBitrates() {
        console.log("Invoked getAudioBitrates");
    }

    getCurrentVideoBitrate() {
        console.log("Invoked getCurrentVideoBitrate");
    }

    setVideoBitrate(bitrate) {
        console.log("Invoked setVideoBitrate");
    }

    getCurrentAudioBitrate() {
        console.log("Invoked getCurrentAudioBitrate");
    }

    setAudioBitrate(bitrate) {
        console.log("Invoked setAudioBitrate");
    }

    getAudioTrack() {
        console.log("Invoked getAudioTrack");
    }

    setAudioTrack(track) {
        console.log("Invoked setAudioTrack");
    }

    getTextTrack() {
        console.log("Invoked getTextTrack");
    }

    setTextTrack(track) {
        console.log("Invoked setTextTrack");
    }

    getVolume() {
        console.log("Invoked getVolume");
    }

    setVolume(volume) {
        console.log("Invoked setVolume");
    }

    getPlaybackRate() {
        console.log("Invoked getPlaybackRate");
    }

    setPlaybackRate(rate, overshoot) {
        console.log("Invoked setPlaybackRate");
    }

    getSupportedKeySystems() {
        console.log("Invoked getSupportedKeySystems");
    }

    setVideoMute(enabled) {
        console.log("Invoked setVideoMute");
    }

    setSubscribedTags(tagNames) {
        console.log("Invoked setSubscribedTags");
    }

    addEventListener(name, handler) {
        console.log("Invoked addEventListener - " + name);
    }

    removeEventListener(name, handler) {
        console.log("Invoked removeEventListener");
    }

    setDRMConfig(config) {
        console.log("Invoked setDRMConfig");
    }

    addCustomHTTPHeader(headerName, headerValue, isLicenseRequest = false) {
        console.log("Invoked addCustomHTTPHeader");
    }

    removeCustomHTTPHeader(headerName) {
        console.log("Invoked removeCustomHTTPHeader");
    }

    setVideoRect(x, y, w, h) {
        console.log("Invoked setVideoRect");
    }

    setVideoZoom(videoZoom) {
        console.log("Invoked setVideoZoom");
    }

    getAvailableVideoTracks() {
       console.log("Invoked getAvailableVideoTracks");
    }

    getAvailableAudioTracks() {
       console.log("Invoked getAvailableAudioTracks");
    }

    getAvailableTextTracks() {
       console.log("Invoked getAvailableTextTracks");
    }

    getVideoRectangle() {
       console.log("Invoked getVideoRectangle");
    }
};
