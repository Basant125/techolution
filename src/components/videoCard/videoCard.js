import * as React from "react"
import * as styles from "./videoCard.module.css"
import playIconWHite from "../../images/Play.svg"

const VideoCard = props => {
  return (
    <div className={styles.card}>
      <div style={{ position: "relative" }}>
        <img
          className={styles.videoPreviewimage}
          src={props.details.imageUrl?.asset?.url}
        />
        <div className={styles.playBtn}>
          <img className={styles.playIcon} src={playIconWHite} />
        </div>
      </div>
      <div className={styles.videoTitle}>{props.details.title}</div>
    </div>
  )
}

export default VideoCard
