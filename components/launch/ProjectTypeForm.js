import React, { useContext } from 'react'
import createRocketContext from '../../context/CreateRocketContext'
import styles from '../../styles/launch.module.css'
import Image from 'next/image'

export default function ProjectTypeForm({ setColor }) {
    const { projectData, setProjectData } = useContext(createRocketContext)

    return (
        <div className="flex flex-col items-center justify-around mb-20">
            What are we going to do ?
            <div className="flex flex-row items-center justify-around mb-20">
                <div
                    onClick={(e) => {
                        setProjectData({ ...projectData, type: 'Web' })
                        setColor('red')
                    }}
                    className="flex flex-col justify-center items-center m-10"
                    style={
                        projectData?.type === 'Web'
                            ? { fontSize: '2rem', fontWeight: 'bolder' }
                            : { fontWeight: 'bolder' }
                    }
                >
                    Web
                    <Image
                        src="/images/types/web.png"
                        alt="Picture of web"
                        width={projectData?.type === 'Web' ? 320 : 180}
                        height={projectData?.type === 'Web' ? 300 : 150}
                    />
                </div>
                <div
                    className="flex flex-col justify-center items-center m-10"
                    onClick={(e) => {
                        setColor('blue')
                        setProjectData({ ...projectData, type: 'Software' })
                    }}
                    style={
                        projectData?.type === 'Software'
                            ? { fontSize: '2rem', fontWeight: 'bolder' }
                            : { fontWeight: 'bolder' }
                    }
                >
                    Software
                    <Image
                        src="/images/types/software.png"
                        alt="Picture of types Software"
                        width={projectData?.type === 'Software' ? 320 : 180}
                        height={projectData?.type === 'Software' ? 300 : 150}
                    />
                </div>
                <div
                    className="flex flex-col justify-center items-center m-10"
                    onClick={(e) => {
                        setColor('yellow')
                        setProjectData({ ...projectData, type: 'Mobile' })
                    }}
                    style={
                        projectData?.type === 'Mobile'
                            ? { fontSize: '2rem', fontWeight: 'bolder' }
                            : { fontWeight: 'bolder' }
                    }
                >
                    Mobile
                    <Image
                        src="/images/types/mobile.png"
                        alt="Picture of type Mobile"
                        width={projectData?.type === 'Mobile' ? 320 : 180}
                        height={projectData?.type === 'Mobile' ? 300 : 150}
                    />
                </div>
            </div>
            {projectData.type && (
                <div className="text-xl font-bold">
                    Let's make the future of {projectData.type} different !
                </div>
            )}
        </div>
    )
}
