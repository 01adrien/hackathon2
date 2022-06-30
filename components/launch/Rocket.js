import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/launch.module.css'

export default function Rocket({ activeStep, isLaunching }) {
    const [color, setColor] = useState('red')
    const [rocketImg, setRocketImg] = useState(
        '/images/rocket/red/rocket_0.png'
    )

    useEffect(() => {
        if (activeStep < 5)
            setRocketImg(`/images/rocket/${color}/rocket_${activeStep}.png`)
        else setRocketImg(`/images/rocket/${color}/rocket_4.png`)
    }, [color, activeStep, isLaunching])

    return (
        <div className="flex flex-col justify-center m-10 p-10">
            {!isLaunching ? (
                <div className={styles.rocketConstruction}>
                    <div className={styles.rocketPart0}>
                        {' '}
                        <Image
                            src={`/images/rocket/${color}/rocket_${
                                activeStep - 1
                            }.png`}
                            alt="Picture of rocket"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div key={rocketImg} className={styles.rocketPart1}>
                        {' '}
                        <Image
                            src={rocketImg}
                            alt="Picture of rocket"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center">
                    <Image
                        key={`/images/rocket/${color}/rocket_5.png`}
                        src={`/images/rocket/${color}/rocket_5.png`}
                        alt="Picture of rocket"
                        width={500}
                        height={500}
                        className={styles.rocketLaunch}
                    />
                    <Image
                        key={'cloud'}
                        src="/images/cloud2.png"
                        alt="Picture of rocket"
                        width={300}
                        height={250}
                        className={styles.smoke}
                    />
                </div>
            )}
        </div>
    )
}
