import * as React from "react"
import * as styles from "./staticCard.module.css"

const StaticCard = props => {
  return (
    <div className={styles.static_card_container}>
      {props.data.map((item, index) => (
          <div className={styles.static_card} key={index}>
              <img
                className={styles.card_image}
                src={item.co_create_works_image?.asset?.url}
                alt="image_cocreate"
              />
              <p className={styles.card_text}>{item.co_create_works_title}</p>
          </div>
      ))}
    </div>
  )
}

export default StaticCard
