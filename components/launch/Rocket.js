import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import createRocketContext from '../../context/CreateRocketContext'

export default function Rocket({ activeStep }) {
    const [color, setColor] = useState('red')
    const [rocketImg, setRocketImg] = useState(
        '/images/rocket/red/rocket_0.png'
    )
    const { isLaunching } = useContext(createRocketContext)

    useEffect(() => {
        if (activeStep < 5)
            setRocketImg(`/images/rocket/${color}/rocket_${activeStep}.png`)
        else setRocketImg(`/images/rocket/${color}/rocket_4.png`)

        console.log(rocketImg)
    }, [activeStep, color])

    return (
        <div>
            <Image
                src={rocketImg}
                alt="Picture of rocket"
                width={500}
                height={500}
            />
            {/* {isLaunching && (
                <Image
                    src="/images/cloud2.png"
                    alt="Picture of rocket"
                    width={500}
                    height={500}
                />
            )} */}
        </div>
    )
}
