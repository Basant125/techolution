import * as React from "react"
import * as styles from "./customInput.module.css"
import PropTypes from "prop-types"
import { FieldTypes } from "../../constants/connectSideBar.const"
import "./customInput-styles.css"
const CustomInput = props => {
  const errors = props.errors
  const control = props.control
  return (
    <div className={`${styles.input} ${props.className}-container`}>
      <span className={styles.input__label}>{props.label}</span>
      {props.inputType === FieldTypes.Text && (
        <input
          {...props.register}
          className={styles.input__field}
          type="text"
          placeholder=" "
        />
      )}
      {props.inputType === FieldTypes.TextArea && (
        <textarea
          {...props.register}
          className={`${styles.input__field} ${styles.input__textArea} ${props.className}`}
          rows="6"
          cols="50"
        ></textarea>
      )}
      {/* <span className={styles.input__label}>{props.label}</span> */}
      <div className={styles.error}>
        {" "}
        {errors[control] && errors[control]?.message}
      </div>
    </div>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.any,
  errors: PropTypes.any,
  control: PropTypes.string,
  inputType: PropTypes.string,
}

export default CustomInput
