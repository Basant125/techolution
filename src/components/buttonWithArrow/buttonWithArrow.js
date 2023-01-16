import * as React from "react";
import * as styles from './customButton.module.css'
import PropTypes from "prop-types"

const CustomButton = (props) => {

    return (
        <div className={`${styles.buttonContainer} ${props.type === "button2" ? styles.button2 : ""}`}>
            <button type="submit" onClick={props.click} className={styles.button}>
                <div className={styles.label}>{props.label}</div> <div className={styles.arrow}> </div>
            </button>
        </div>
    )
}

CustomButton.propTypes = {
    label: PropTypes.string
}

export default CustomButton
