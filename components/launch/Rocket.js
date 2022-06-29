import React, { useContext, useState } from 'react'
import createRocketContext from '../../context/CreateRocketContext'
import Image from 'next/image'

export default function Rocket() {
    const [color, setColor] = useState('red')
    const { activeStep } = useContext(createRocketContext)

    const rocketImg = `/images/rocket/${color}/rocket_${activeStep}`

    return (
        <div>
            <Image
                src={`/images/rocket/${color}/rocket_${activeStep}.png`}
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    )
}
