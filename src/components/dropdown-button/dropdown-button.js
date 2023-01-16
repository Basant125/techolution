import * as React from "react"
import "../../styles/dropdown-button.css"

const Dropdown = props => {

  const dropdownClick = () => {
    const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
    const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
    // console.log(height)
    let dropdownVisible = true;
    if(height > 600 && height < 850 && width > 1250 && width <1750){
      dropdownVisible = false
    }
    if (width < 426 || !dropdownVisible) {
      document.getElementById("heartElement").click()
    }
  }

  return (
  <>
    <div className="dropdown">
      <button className="dropbtn" onClick={dropdownClick}>{props.cta?.dropdown_cta_name}</button>
      <div className="dropdown-content">
        {props.cta?.cta?.map((option, index) => (
          <a
            key={index}
            onClick={() => {
              if (index === 0) {
                document.getElementById("heartElement").click()
              } else {
                window.fullpage_api.moveSectionDown()
              }
            }}
          >
            {option?.cta_name}
          </a>
        ))}
      </div>
    </div>
  </>
  )
}

export default Dropdown
