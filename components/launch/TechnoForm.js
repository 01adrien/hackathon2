import React from 'react'
import styles from '../../styles/launch.module.css'
import Image from 'next/image'

export default function TechnoForm() {
    return (
        <div className="flex flex-row justify-center items-center w-[80%] flex-wrap	 ">
            <div className={styles.technos}>
                <div>JavaScript</div>
                <Image
                    src="/images/brick.png"
                    alt="Picture of techno brick"
                    width={100}
                    height={100}
                />{' '}
            </div>
            <div className={styles.technos}>
                <div>PHP </div>
                <Image
                    src="/images/brick.png"
                    alt="Picture of techno brick"
                    width={100}
                    height={100}
                />{' '}
            </div>
            <div className={styles.technos}>
                <div> C# </div>
                <Image
                    src="/images/brick.png"
                    alt="Picture of techno brick"
                    width={100}
                    height={100}
                />{' '}
            </div>
            <div className={styles.technos}>
                <div>Java</div>
                <Image
                    src="/images/brick.png"
                    alt="Picture of techno brick"
                    width={100}
                    height={100}
                />{' '}
            </div>
            <div className={styles.technos}>
                <div>Python </div>
                <Image
                    src="/images/brick.png"
                    alt="Picture of techno brick"
                    width={100}
                    height={100}
                />{' '}
            </div>
        </div>
    )
}
