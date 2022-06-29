import React, { useContext } from 'react'
import Image from 'next/image'

export default function SectorForm() {
    const handleClick = (value) => {
        console.log(value)
    }

    return (
        <div>
            <div onClick={handleClick('Bank')}>
                Bank
                <Image
                    src="/images/planets/planete_orange.png"
                    alt="Picture of planet bank"
                    width={100}
                    height={100}
                />
            </div>
            <div onClick={handleClick('Medical')}>
                Medical
                <Image
                    src="/images/planets/planete_bleu.png"
                    alt="Picture of planet medical"
                    width={100}
                    height={100}
                />
            </div>
            <div onClick={handleClick('Industry')}>
                Industry
                <Image
                    src="/images/planets/planete_rose.png"
                    alt="Picture of planet industry"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}
