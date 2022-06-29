import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'

export default function DescriptionForm() {
    const { projectData, setProjectData } = useContext(createRocketContext)

    const handleChange = (e) => {
        setProjectData({ ...projectData, description: e.target.value })
    }

    return (
        <div>
            <form>
                <label>
                    Description : <textarea onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}
