import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'

export default function MainDataForm() {
    const { projectData, setProjectData } = useContext(createRocketContext)

    const handleChange = (e) => {
        setProjectData({ ...projectData, name: e.target.value })
    }
    return (
        <div>
            <form>
                <label>
                    Project Name : <input />
                </label>
            </form>
        </div>
    )
}
