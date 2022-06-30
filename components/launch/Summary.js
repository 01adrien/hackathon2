import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'

export default function Summary({ board }) {
    const { projectData } = useContext(createRocketContext)

    return (
        <div className="flex flex-col justify-around items-start mb-10 w-[40vw] h-[auto  ]">
            <div className="m-5">
                Mission : {projectData?.name} / {projectData?.type}
            </div>
            <div className="m-5">Sector : {projectData?.sector}</div>
            <div className="m-5">Explorer : {projectData?.explorerNb}</div>
            <div className="m-5">
                Tools :
                {board.map((techno) => (
                    <li className="text-[18px]" key={techno.id}>
                        {techno.name}
                    </li>
                ))}
            </div>
            <div className="m-5">Instructions : {projectData?.description}</div>
        </div>
    )
}
