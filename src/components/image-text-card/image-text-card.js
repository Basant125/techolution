import { Link, navigate } from "gatsby"
import * as React from "react"
import "./image-text-card.css"

const ImageTextCard = props => {
  const handleNavigate = (link, e) => {
    navigate(`${link}`)
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <div className="image_text_card_container">
      {props.data.map((item, index) => (
        <Link to={item.content_link}>
        <div
          className="image_text_card"
          onClick={(e) => handleNavigate(item.content_link, e)}
          key={index}
        >
          <div
            className="card_image"
            style={{backgroundImage: `url(${item.co_create_works_image?.asset?.url})`}}
          ></div>
          <p className="card_text">{item.co_create_works_title}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default ImageTextCard
