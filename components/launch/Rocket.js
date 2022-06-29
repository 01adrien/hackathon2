import React, { useContext, useEffect, useState } from 'react'
import createRocketContext from '../../context/CreateRocketContext'
import Image from 'next/image'

export default function Rocket({ activeStep }) {
    const [color, setColor] = useState('red')
    const [rocketImg, setRocketImg] = useState()

    useEffect(() => {
        setRocketImg(`/images/rocket/${color}/rocket_${activeStep}`)

        console.log(rocketImg)
    }, [activeStep, color])

    return (
        <div>
            <Image
                src={`/images/rocket/${color}/rocket_${activeStep}.png`}
                alt="Picture of rocket"
                width={500}
                height={500}
            />
        </div>
    )
}
