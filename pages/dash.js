import Popup from '../components/popup'
import { useState } from 'react'

export default function Dash() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <input
                type="button"
                value="Click to Open Popup"
                onClick={togglePopup}
            />
            {isOpen && <Popup />}
        </div>
    )
}
