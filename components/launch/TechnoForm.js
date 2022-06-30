import React from 'react'
import styles from '../../styles/launch.module.css'

export default function TechnoForm() {
    return (
        <div>
            <div className={styles.technos}>JavaScript</div>
            <div className={styles.technos}>PHP</div>
            <div className={styles.technos}>C#</div>
            <div className={styles.technos}>Java</div>
            <div className={styles.technos}>Python</div>
        </div>
    )
}
