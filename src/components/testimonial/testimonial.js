import * as React from "react"
import * as styles from "./testimonial.module.css"

const Testimonial = props => {
  const testimonial = props.testimonial

  return (
    <div className={styles.cardContainer}>
      <div className={styles.userContainer}>
        <img
          className={styles.userProfilePic}
          alt={`${testimonial.userName}Pic`}
          src={testimonial.profilePicUrl?.asset?.url}
        />
        <div className={styles.userInfo}>
          <div className={styles.userName}>{testimonial.userName}</div>
          <div className={styles.jobProfile}>{testimonial.jobProfile}</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div>
        <div className={styles.companyName}>{testimonial.companyName}</div>
        <div className={styles.testimony}>{testimonial.testimony}</div>
      </div>
    </div>
  )
}

export default Testimonial
