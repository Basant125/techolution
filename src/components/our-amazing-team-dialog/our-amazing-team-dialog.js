import * as React from "react"
import "./our-amazing-team-dialog.css"
import getYouTubeID from "get-youtube-id"

const OurAmazingTeamDialog = props => {
  const id = getYouTubeID(props?.testimony?.video_url)
  const url = `https://www.youtube.com/embed/${id}`

  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div
      id="our-amazing-team-dialog-container"
      className={`our-amazing-team-dialog-container our-amazing-team-dialog-container-mobile user-content-${props?.idx}`}
    >
      <div className="highlighted-team__crossIcon" onClick={()=> props.close()}>
      </div>
      {/* <div className="top-user-section">
        <img
          className="userProfilePic"
          alt={`${props?.testimony?.userName}Pic`}
          src={props?.testimony?.profilePicUrl?.asset?.url}
        />
        <div className="dialog-text-content">
          <div className="dialog-text-content-mobile-name">
            {props?.testimony?.userName}
          </div>
          <div className="dialog-text-content-mobile-job">
            {props?.testimony?.jobProfile}
          </div>
        </div>
      </div> */}
      <div className="hold-iframe">
        <iframe
          width="100%"
          height="200"
          src={url}
          title="YouTube Preview"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="dialog-content-iframe"
          onLoad={() => setIsLoading(false)}
        ></iframe>
        {isLoading && (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>

      <div className="dialog-text-content">
        <div className="dialog-text-content-name ">
          {props?.testimony?.userName}
        </div>
        <div className="dialog-text-content-job">
          {props?.testimony?.jobProfile}
        </div>
        <q>{props?.testimony?.testimony}</q>
        <button className="dialog-next-btn dialog-next-btn_responsive" onClick={props?.clickedNext}>
        Next<span></span>
      </button>
      </div>
      <button className="dialog-next-btn" onClick={props?.clickedNext}>
        Next<span></span>
      </button>
    </div>
  )
}

export default OurAmazingTeamDialog
