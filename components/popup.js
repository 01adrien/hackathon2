import React from 'react'
import styles from '../styles/popup.module.css'

const Popup = (props) => {
    return (
        <div className={styles.popupBox}>
            <div className={styles.box}>
                <span className={styles.closeIcon} onClick={props.handleClose}>
                    x
                </span>
                {props.content}
            </div>
        </div>
    )
}

export default Popup
