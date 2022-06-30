import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'
import styles from '../../styles/launch.module.css'

export default function MainDataForm() {
    const { projectData, setProjectData } = useContext(createRocketContext)

    const handleChange = (e) => {
        setProjectData({ ...projectData, name: e.target.value })
    }
    return (
        <div>
            <form className="flex flex-col justify-between items-start">
                <label className={styles.mainDataLabel}>
                    Project name :{' '}
                    <input
                        required
                        type="text"
                        className="rounded-lg p-5 shadow-inner shadow-gray-400"
                        placeholder="Mission: Impossible"
                        value={projectData?.name}
                        onChange={(e) =>
                            setProjectData({
                                ...projectData,
                                name: e.target.value,
                            })
                        }
                    />
                </label>

                <label className={styles.mainDataLabel}>
                    Budget :{' '}
                    <input
                        required
                        className="rounded-lg p-5 shadow-inner shadow-gray-400"
                        type="number"
                        name="currency-field"
                        id="currency-field"
                        pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        value={projectData?.budget}
                        data-type="currency"
                        placeholder="$1,000,000.00"
                        onChange={(e) =>
                            setProjectData({
                                ...projectData,
                                budget: e.target.value,
                            })
                        }
                    />
                </label>

                <label className={styles.mainDataLabel}>
                    Number of explorers :{' '}
                    <input
                        required
                        className="rounded-lg p-5 shadow-inner shadow-gray-400"
                        type="number"
                        value={projectData?.explorerNb}
                        placeholder="0"
                        onChange={(e) =>
                            setProjectData({
                                ...projectData,
                                explorerNb: e.target.value,
                            })
                        }
                    />
                </label>
            </form>
        </div>
    )
}
