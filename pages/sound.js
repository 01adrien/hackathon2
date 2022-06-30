import Popup from '../components/popup'
import { useState } from 'react'
import style from '../styles/popup.module.css'
import useSound from 'use-sound'

export default function Dash() {
    const [isOpen, setIsOpen] = useState(false)
    const [audio] = useSound('/sounds/SFB-explosion2.mp3')
    const [audio2] = useSound('/sounds/laserGun.mp3')

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <input type="button" value="Click to Open Popup" onClick={audio2} />
            {isOpen && (
                <Popup
                    content={
                        <div className={style.projectDiv}>
                            <h1 className={style.titleProject}>
                                PROJECT TITLE
                            </h1>
                            <h2 className={style.titleCity}>CITY</h2>
                            <button className={style.button}>VIEW</button>
                        </div>
                    }
                    handleClose={togglePopup}
                />
            )}
        </div>
    )
}