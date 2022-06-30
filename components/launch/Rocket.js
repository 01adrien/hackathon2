import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/launch.module.css'
import { useDrop } from 'react-dnd'
import Techno from './Techno'
import createRocketContext from '../../context/CreateRocketContext'

export default function Rocket({
    activeStep,
    isLaunching,
    color,
    board,
    setBoard,
}) {
    const [rocketImg, setRocketImg] = useState(
        '/images/rocket/red/rocket_0.png'
    )
    const { technolist } = useContext(createRocketContext)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'techno',
        drop: (item) => addToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addToBoard = (id) => {
        const newtechnolist = technolist.filter((techno) => id === techno.id)
        setBoard((board) => [...board, newtechnolist[0]])
    }

    useEffect(() => {
        if (activeStep < 5)
            setRocketImg(`/images/rocket/${color}/rocket_${activeStep}.png`)
        else setRocketImg(`/images/rocket/${color}/rocket_4.png`)
    }, [color, activeStep, isLaunching])

    return (
        <div className="flex flex-col justify-center ml-10 pl-10 pr-10 mr-10 h-[100vh]">
            {!isLaunching ? (
                <div className={styles.rocketConstruction}>
                    {activeStep === 3 && (
                        <div className={styles.board} ref={drop}>
                            {board.map((techno) => {
                                return (
                                    <Techno
                                        key={techno.id}
                                        name={techno.name}
                                        id={techno.id}
                                    />
                                )
                            })}
                        </div>
                    )}
                    {activeStep > 0 && (
                        <div className={styles.rocketPart0}>
                            {' '}
                            <Image
                                src={`/images/rocket/${color}/rocket_${
                                    activeStep - 1
                                }.png`}
                                alt="Picture of rocket"
                                width={500}
                                height={500}
                            />
                        </div>
                    )}
                    <div key={rocketImg} className={styles.rocketPart1}>
                        {' '}
                        <Image
                            src={rocketImg}
                            alt="Picture of rocket"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.worker}>
                        <Image
                            src="/images/worker.png"
                            alt="Picture of bob the worker"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className={styles.rocketConstruction}>
                        <div className={styles.rocketLaunch}>
                            {' '}
                            <Image
                                key={`/images/rocket/${color}/rocket_5.png`}
                                src={`/images/rocket/${color}/rocket_5.png`}
                                alt="Picture of rocket"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className={styles.smoke}>
                            {' '}
                            <Image
                                key={'cloud'}
                                src="/images/cloud2.png"
                                alt="Picture of rocket"
                                width={500}
                                height={250}
                            />
                        </div>
                    </div>
                    <div className={styles.worker}>
                        <Image
                            src="/images/worker_launch.png"
                            alt="Picture of bob the worker"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
