import * as React from "react"
import * as styles from "./customSelect.module.css"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import Chip from "./chip"

const CustomSelect = props => {
  const control = props.control
  const [checked, setChecked] = useState(props.options[0].key)
  const [selectedInterests, setSelectedInterests] = useState([])

  useEffect(() => {
    function clickCallback(e) {
      const dropdownElement = document.getElementById("dropdown")
      if (
        dropdownElement &&
        dropdownElement.classList.contains(styles.expanded)
      ) {
        dropdownElement.classList.toggle(styles.expanded)
      }
    }
    window.addEventListener("click", clickCallback)
    return () => window.removeEventListener("click", clickCallback)
  }, [])

  const dropdownClick = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.target.htmlFor && e.target.htmlFor !== checked) {
      // setChecked(e.target.htmlFor)
      const interestTitle = findInterestTitle(e.target.htmlFor)
      if (!selectedInterests.includes(interestTitle)) {
        setSelectedInterests([...selectedInterests, interestTitle])
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

  const findInterestKey = title => {
    return props.options.find(interest => interest.title === title).key || ""
  }

  const removeChip = interestTitle => {
    // const interestKey = findInterestKey(interestTitle)
    const filteredInterestTitle = selectedInterests.filter(
      interest => interest !== interestTitle
    )
    setSelectedInterests(filteredInterestTitle)
    // if(!filteredInterestTitle.includes(checked)){
    //     const key = findInterestKey(filteredInterestTitle[0])
    //     setChecked(key)
    // }
  }

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.input__label}>{props.label}</div>
      <div className={styles.chip_container}>
        {selectedInterests.map(interest => (
          <Chip
            key={interest}
            label={interest}
            close={() => removeChip(interest)}
          />
        ))}
      </div>
      <span id="dropdown" className={styles.dropdown} onClick={dropdownClick}>
        {props.options.map(option => (
          <>
            <input
              key={option.key}
              type="radio"
              name={control}
              checked={checked === option.key}
              {...props.register}
              value={option.key}
              id={option.key}
            />
            <label htmlFor={option.key}>{option.title}</label>
          </>
        ))}
      </span>
    </div>
  )
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  register: PropTypes.any,
  errors: PropTypes.any,
  control: PropTypes.string,
}

export default CustomSelect
