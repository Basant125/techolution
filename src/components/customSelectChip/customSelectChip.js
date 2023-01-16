import * as React from "react"
import * as styles from "./selectChip.module.css"

const SelectChip = props => {
  const errors = props.errors
  const control = props.control
  return (
    <div className={styles.selectChip}>
      {/* <div className={styles.input__label}>{props.label}</div> */}
      <div className={styles.input__label}>{props.label}</div>

      <div className={`${styles.chip_group} ${props.className == 'your_budget_section'?styles.your_budget_section:''}`} tabIndex="-1" role="radiogroup">
        {props.options.map((option, index) => (
          <div key={`radio${control}${index}`} className={styles.chip}>
            <input
              id={`radio${control}${index}`}
              type="radio"
              name={control}
              value={option.key}
              {...props.register}
            />
            <label htmlFor={`radio${control}${index}`}>{option.title}</label>
          </div>
        ))}
      </div>
      <div className={styles.error}>
        {" "}
        {errors[control] && errors[control]?.message}
      </div>
    </div>
  )
}

export default SelectChip
