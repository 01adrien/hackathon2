import React, { useContext } from 'react'
import Image from 'next/image'
import createRocketContext from '../../context/CreateRocketContext'

export default function SectorForm() {
    const { projectData, setProjectData } = useContext(createRocketContext)

    return (
        <div className="flex flex-col items-center justify-around mb-20">
            Where are we going Captain?{' '}
            <div className="flex flex-row items-center justify-around mb-20">
                <div
                    onClick={(e) =>
                        setProjectData({ ...projectData, sector: 'Bank' })
                    }
                    className="flex flex-col justify-center items-center m-10"
                    style={
                        projectData?.sector === 'Bank'
                            ? { fontSize: '2rem', fontWeight: 'bolder' }
                            : { fontWeight: 'bolder' }
                    }
                >
                    Bank
                    <Image
                        src="/images/planets/planete_orange.png"
                        alt="Picture of planet Bank"
                        width={projectData?.sector === 'Bank' ? 200 : 100}
                        height={projectData?.sector === 'Bank' ? 200 : 100}
                    />
                </div>
                <div
                    className="flex flex-col justify-center items-center m-10"
                    onClick={(e) =>
                        setProjectData({ ...projectData, sector: 'Medical' })
                    }
                    style={
                        projectData?.sector === 'Medical'
                            ? { fontSize: '2rem', fontWeight: 'bolder' }
                            : { fontWeight: 'bolder' }
                    }
                >
                    Medical
                    <Image
                        src="/images/planets/planete_bleu.png"
                        alt="Picture of planet medical"
                        width={projectData?.sector === 'Medical' ? 200 : 100}
                        height={projectData?.sector === 'Medical' ? 200 : 100}
                    />
                </div>
                <div
                    className="flex flex-col justify-center items-center m-10"
                    onClick={(e) =>
                        setProjectData({ ...projectData, sector: 'Industry' })
                    }
                    style={
                        projectData?.sector === 'Industry'
                            ? { fontSize: '2rem', fontWeight: 'bolder' }
                            : { fontWeight: 'bolder' }
                    }
                >
                    Industry
                    <Image
                        src="/images/planets/planete_rose.png"
                        alt="Picture of planet industry"
                        width={projectData?.sector === 'Industry' ? 200 : 100}
                        height={projectData?.sector === 'Industry' ? 200 : 100}
                    />
                </div>
            </div>
            {projectData.sector && (
                <div className="text-xl font-bold">
                    Go to planet {projectData.sector} !
                </div>
            )}
        </div>
    )
}
