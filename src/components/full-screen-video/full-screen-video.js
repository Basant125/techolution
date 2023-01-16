import * as React from "react"
import "./video.css"
import closeIcon from "../../images/close-icon.png"

const closePopup = () => {
  var Video = document.getElementById("co_create_video");
  if(Video == null || Video == undefined){
    closePopupWithIndex();
  }else{
  var mainVideoDiv = document.getElementById("video_popup")
  if (mainVideoDiv != null) {
    mainVideoDiv.style.display = "none"
  }
  var fade = document.getElementById("fade")
  if (fade != null) {
    fade.style.display = "none"
  }
    var imgToHide = document.getElementsByClassName(
      "bracket-image-co-create-mobile2"
    )
    if (imgToHide != null && imgToHide[0].style.opacity == 0) {
      for (let i = 0; i < imgToHide.length; i++) {
        imgToHide[i].style.opacity = 1;
        imgToHide[i].style.zIndex = 99;
      }
    }
    var imgToHide = document.getElementsByClassName("bracket-image-index")
    if (imgToHide != null && imgToHide[0].style.opacity == 0) {
      for (let i = 0; i < imgToHide.length; i++) {
        imgToHide[i].style.opacity = 1;
        imgToHide[i].style.zIndex = 99;
      }
    }
  if (Video != null) {
    Video.allow = "autoplay"
    let iframeSrc = Video.src
    let url = iframeSrc.split("&autoplay=1")
    Video.src = url[0];
    Video.allow = "";
    //window.history.back();
    //stop video
    //  Video.contentWindow.postMessage(
    //    '{"event":"command", "func":"stopVideo", "args":""}',
    //    "*"
    //  );
  }
}
}
const openVideoPopup = () => {
  var Video = document.getElementById("co_create_video")
  var mainVideoDiv = document.getElementById("video_popup")
  if (mainVideoDiv != null) {
    mainVideoDiv.style.display = "block"
  }
  var fade = document.getElementById("fade")
  if (fade != null) {
    fade.style.display = "block"
  }

    var imgToHide = document.getElementsByClassName(
      "bracket-image-co-create-mobile2"
    )
    if (imgToHide != null) {
      for (let i = 0; i < imgToHide.length; i++) {
        imgToHide[i].style.zIndex = 0;
        imgToHide[i].style.opacity = 0;
      }
    }
    var imgToHide = document.getElementsByClassName("bracket-image-index")
    if (imgToHide != null) {
      for (let i = 0; i < imgToHide.length; i++) {
        imgToHide[i].style.zIndex = 0;
        imgToHide[i].style.opacity = 0;
      }
    }
  if (Video != null) {
    Video.allow = "autoplay; fullscreen"
    let iframeSrc = Video.src
    Video.src = iframeSrc + "&autoplay=1"
//     var req = Video.requestFullscreen
//     || Video.webkitRequestFullscreen
//     || Video.mozRequestFullScreen
//     || Video.msRequestFullscreen;

// req.call(Video);
  }
}

const openVideoPopupWithIndex = (index) => {
  var Video = document.getElementById("co_create_video_"+index)
  var mainVideoDiv = document.getElementById("video_popup_"+index)
  if (mainVideoDiv != null) {
    mainVideoDiv.style.display = "block"
  }
  var fade = document.getElementById("fade_"+index)
  if (fade != null) {
    fade.style.display = "block"
  }
  if (Video != null) {
    Video.allow = "autoplay; fullscreen"
    let iframeSrc = Video.src
    Video.src = iframeSrc + "&autoplay=1"
  }
}
const closePopupWithIndex = () => {
  for(var index=0;index<=5;index++){
  var Video = document.getElementById("co_create_video_"+index);
  if(Video == null || Video == undefined){
    break;
  }
  var mainVideoDiv = document.getElementById("video_popup_"+index)
  if (mainVideoDiv != null) {
    mainVideoDiv.style.display = "none"
  }
  var fade = document.getElementById("fade_"+index)
  if (fade != null) {
    fade.style.display = "none"
  }
  if (Video != null) {
    Video.allow = "autoplay"
    let iframeSrc = Video.src
    let url = iframeSrc.split("&autoplay=1")
    Video.src = url[0];
    Video.allow = "";
    //window.history.back();
  }
}
}
const FullscreenVideo = props => (
    <>
<div id={props.idList[0]} className={`${props.className} video-popup`}>
  <a className="boxclose" onClick={closePopup}>
    <img src={closeIcon} alt="close"/>
  </a>
    <iframe
      id={props.idList[1]}
      src={`${props.videoUrl}?playsinline=1&rel=0&showinfo=0&modestbranding=0`}
      title="CoCreate video"
      frameBorder="0"
      scrolling="no"
      className="iframe_video"
      allowFullscreen
    ></iframe>
</div>
<div id={props.idList[2]} className="fade-div"></div>
</>
)

export { FullscreenVideo, closePopup, openVideoPopup, openVideoPopupWithIndex, closePopupWithIndex}
