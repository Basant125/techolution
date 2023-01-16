import * as React from "react"
import * as styles from "./customDropdown.module.css"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import Chip from "../chip/chip"

const CustomDropdown = props => {
  const control = props.control
  const [selectedInterests, setSelectedInterests] = useState([])

  useEffect(() => {
    if (props.getValues(control)) {
      setSelectedInterests(props.getValues(control))
    }
    function clickCallback(e) {
      const dropdownElement = document.getElementById("dropdown")
      if (
        dropdownElement &&
        dropdownElement.classList.contains(styles.expanded) &&
        e.target.id !== "dropdownInput"
      ) {
        dropdownElement.classList.toggle(styles.expanded)
      } else if (dropdownElement && e.target.id === "dropdownInput") {
        dropdownElement.classList.toggle(styles.expanded)
      }
    }
    window.addEventListener("click", clickCallback)
    return () => window.removeEventListener("click", clickCallback)
  }, [])

  const dropdownClick = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.target.htmlFor) {
      const interestTitle = findInterestTitle(e.target.htmlFor)
      if (!selectedInterests.includes(interestTitle)) {
        setSelectedInterests([...selectedInterests, interestTitle])
        props.setValue(control, [...selectedInterests, interestTitle])
      }
    }
    toggleDropdown()
  }

  const toggleDropdown = () => {
    const dropdownElement = document.getElementById("dropdown")
    if (dropdownElement) {
      dropdownElement.classList.toggle(styles.expanded)
    }
  }

  const findInterestTitle = key => {
    return props.options.find(interest => interest.key === key).title || ""
  }

  const removeChip = interestTitle => {
    const filteredInterestTitle = selectedInterests.filter(
      interest => interest !== interestTitle
    )
    setSelectedInterests(filteredInterestTitle)
  }

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.chip_container}>
        {selectedInterests.map(interest => (
          <Chip
            key={interest}
            label={interest}
            close={() => removeChip(interest)}
          />
        ))}
      </div>
      <div id="dropdownInput" className={styles.dropdownInput}>
        {props.label}
      </div>
      <div id="dropdown" className={styles.dropdown}>
        <div
          role="presentation"
          onKeyPress={dropdownClick}
          className={styles.dropdownDiv}
          onClick={dropdownClick}
        >
          {props.options.map(option => (
            <div key={option.key}>
              <input
                type="radio"
                name={control}
                {...props.register}
                value={option.key}
                id={option.key}
              />
              <label htmlFor={option.key}>{option.title}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

CustomDropdown.propTypes = {
  label: PropTypes.string,
  register: PropTypes.any,
  errors: PropTypes.any,
  control: PropTypes.string,
}

export default CustomDropdown
