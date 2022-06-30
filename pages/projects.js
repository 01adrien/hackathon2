import Layout from '../components/layout'
import Image from 'next/image'
import yellowRocketImg from '../public/images/rocket_y.png'
import blueRocketImg from '../public/images/rocket_blue.png'
import explosion from '../public/images/explosion.png'

import React, { useState, useEffect } from 'react'

export default function Projects() {
    const rocketNumber = 5
    const rocketPicture = [yellowRocketImg, blueRocketImg]
    const [cursorValue, setCursorValue] = useState(0)
    const [rocketSelected, setRocketSelected] = useState({})
    const [rocketDestroy, setRocketDestroy] = useState(false)
    const initialState = new Array(rocketNumber).fill().map((_, i) => ({
        progress: (i + 1) * 100,
        ...rocketPicture[Math.floor(Math.random() * 2)],
        id: i,
    }))
    const [rockets, setRockets] = useState(initialState)

    function changeRocket(rocket) {
        setRocketSelected(rocket)
        console.log(rocket.progress)
        setCursorValue(rocket.progress)
    }

    function moveRocket() {
        rocketSelected.progress = cursorValue
    }
    function destroyRocket() {
        rocketSelected.src = explosion.src
        setRocketDestroy(!rocketDestroy)
        setTimeout(
            setRockets(rockets.filter((r) => r.id !== rocketSelected.id)),
            4000
        )
        //setRockets(rockets.filter((r) => r.id !== rocketSelected.id))
    }

    useEffect(() => {
        moveRocket()
        // console.log(rockets)
    }, [cursorValue, rocketSelected, rockets, rocketDestroy])

    return (
        <Layout>
            <div className="project-bg h-[100%]">
                <div className="project-bg h-[100%]">
                    <input
                        className="w-[90vw]"
                        onChange={(e) => setCursorValue(e.target.value)}
                        type="range"
                        min="0"
                        max="1000"
                        value={cursorValue}
                        step="10"
                    ></input>
                    <button
                        onClick={() => destroyRocket(rocketSelected)}
                        className="text-red-800 bg-white hover:bg-red-200 rounded-md text-2xl py-2 px-4 fixed"
                    >
                        destroy
                    </button>
                    {rockets.length
                        ? rockets.map((rocket, i) => (
                              <div className={`w-[100vw] relative`}>
                                  <div
                                      style={{
                                          marginLeft: `${rocket.progress}px`,
                                      }}
                                      onClick={() => changeRocket(rocket)}
                                  >
                                      <Image
                                          className={` rotate-90 h-[100%] `}
                                          src={rocket.src}
                                          width={200}
                                          height={200}
                                      />
                                  </div>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </Layout>
    )
}
