import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'

export default function Summary() {
    const { projectData, setProjectData } = useContext(createRocketContext)

    return (
        <div className="flex flex-col justify-around items-start mb-10 w-[40vw] h-[auto  ]">
            <div className="m-5">
                Mission : {projectData?.name} / {projectData?.type}
            </div>
            <div className="m-5">Sector : {projectData?.sector}</div>
            <div className="m-5">Explorer : {projectData?.explorerNb}</div>
            <div className="m-5">Tools : {projectData?.technos}</div>
            <div className="m-5">Instructions : {projectData?.description}</div>
        </div>
    )
}
