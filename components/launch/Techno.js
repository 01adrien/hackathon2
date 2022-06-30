import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import styles from '../../styles/launch.module.css'
import Image from 'next/image'
import useSound from 'use-sound'
import 'react-toastify/dist/ReactToastify.css'

export default function Techno({ name, id }) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'techno',
        item: { name: name, id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const [phperror] = useSound('/sounds/phperror.mp3')

    const ifPhp = () => {
        if (name === 'PHP') {
            phperror()
            alert('Mauvais language')
        }
    }

    return (
        <div
            ref={drag}
            className="flex flex-col justify-center items-center m-5   "
        >
            <div>{name}</div>
            <Image
                src="/images/brick.png"
                alt="Picture of techno brick"
                width={100}
                height={100}
                onDrag={ifPhp}
            />{' '}
        </div>
    )
}
