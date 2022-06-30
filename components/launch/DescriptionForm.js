import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'
import styles from '../../styles/launch.module.css'

export default function DescriptionForm() {
    const { projectData, setProjectData } = useContext(createRocketContext)

    const handleChange = (e) => {
        setProjectData({ ...projectData, description: e.target.value })
    }

    return (
        <div>
            <form>
                <label className={styles.descriptionLabel}>
                    <div className="text-xl font-bold 		mb-5">Description : </div>
                    <textarea
                        onChange={handleChange}
                        className="min-w-[40vw] h-[40vh] rounded-lg p-5 shadow-inner"
                        placeholder="Describe the mission instructions here"
                    />
                </label>
            </form>
        </div>
    )
}
