import React from 'react'
import styles from '../../styles/launch.module.css'

export default function ProjectTypeForm() {
    return (
        <div>
            <div className={styles.types}>Web</div>
            <div className={styles.types}>SoftWare</div>
            <div className={styles.types}>Mobile</div>
        </div>
    )
}
