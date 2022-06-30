import React from 'react'
import { useDrag } from 'react-dnd'
import styles from '../../styles/launch.module.css'
import Image from 'next/image'

export default function Techno({ name, id }) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'techno',
        item: { name: name, id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
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
            />{' '}
        </div>
    )
}
