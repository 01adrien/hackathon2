/* eslint-disable */
import React, { useState, useEffect } from 'react'
import style from '../../styles/dashboard.module.css'
import Layout from '../../components/layout'
import LaserRay from '../../components/laserRay'
import Image from 'next/image'
import yellowRocketImg from '../../public/images/rocket/yellow/rocket_5.png'
import blueRocketImg from '../../public/images/rocket/blue/rocket_5.png'
import redRocketImg from '../../public/images/rocket/red/rocket_5.png'
import explosion from '../../public/images/explosion.png'
import ufo from '../../public/images/ufo.png'
import Popup from '../../components/popup'
import useSound from 'use-sound'
import { useRouter } from 'next/router'

export default function dashboard() {
    const router = useRouter()
    const [filterLang, setFilterLang] = useState('')
    const [openPopup, setOpenPopup] = useState(false)
    const [audio] = useSound('/sounds/SFB-explosion2.mp3')
    const [audio2] = useSound('/sounds/laserGun.mp3')
    const handleChange = (value) => {
        setFilterLang(!filterLang)
    }
    const [rocketNumber, setRocketNumber] = useState(7)
    const defaultPosition = [2, 7, 1, 4, 5, 8, 2, 5, 7, 9, 2, 3]
    const rocketPicture = [blueRocketImg, yellowRocketImg, redRocketImg]
    const [cursorValue, setCursorValue] = useState(0)
    const [rocketSelected, setRocketSelected] = useState({})
    const [rocketDestroy, setRocketDestroy] = useState(false)
    const initialState = new Array(rocketNumber).fill().map((_, i) => ({
        progress: defaultPosition[i] * 100,
        ...rocketPicture[Math.floor(Math.random() * 3)],
        id: i,
    }))
    const [rockets, setRockets] = useState(initialState)
    const laserX = 0
    const laserY = 0
    function changeRocket(rocket) {
        console.log(rocket)
        setOpenPopup(true)
        setRocketSelected(rocket)
        setCursorValue(rocket.progress)
    }

    function moveRocket() {
        rocketSelected.progress = cursorValue
    }

    function projectComplete() {
        if (rocketSelected.progress > 1220) {
            rocketSelected.src = explosion.src
            setTimeout(
                () =>
                    setRockets(
                        rockets.filter((r) => r.id !== rocketSelected.id)
                    ),
                200
            )
        }
    }

    function destroyRocket() {
        audio2()
        rocketSelected.src = explosion.src
        setTimeout(() => setRocketDestroy(!rocketDestroy), 200)
        setTimeout(() => audio(), 300)
        setTimeout(
            () => setRockets(rockets.filter((r) => r.id !== rocketSelected.id)),
            700
        )
    }

    function searchRockets(n) {
        setRockets(
            new Array(n).fill().map((_, i) => ({
                progress: Math.floor(Math.random() * 90) * 10,
                ...rocketPicture[Math.floor(Math.random() * 3)],
                id: i,
            }))
        )
    }

    function fire(laserX, laserY, fuseeX, fuseeY) {
        const canvas = document.getElementById('space')
        if (canvas.getContext) {
            context = canvas.getContext('2d')
        }
        function drawLine() {
            context.strokeStyle = 'green'
            context.lineWidth = 4
            context.moveTo(20, 100)
            context.lineTo(200, 10)
            context.stroke()
        }
        drawLine()
    }

    useEffect(() => {
        moveRocket()
        projectComplete()
    }, [cursorValue, rocketSelected, rockets, rocketDestroy])

    return (
        <Layout pageTitle={'dashboard'}>
            <div className={style.dashboardbg}>
                <div className="flex justify-between">
                    <div className="flex flex-col absolute py-16 left-0 mr-12 w-[15%] h-full p-18 bg-black shadow-lg shadow-gray-400">
                        <p className="py-6 text-[20px] left-0 text-white uppercase font-bold text-center ">
                            Search your Rocket
                        </p>
                        <form className="my-6 flex justify-center flex-col items-center">
                            <div className=" flex flex-col w-[10vw] shadow-md shadow-gray-300 rounded-md m-auto  text-[#7F7F7F] bg-white my-6">
                                <label
                                    htmlFor="find a project"
                                    className="text-xs sm:text-base py-1"
                                >
                                    <textarea
                                        type="textarea"
                                        className="w-[100%] text-black font-bold hover:bg-yellow-200"
                                        rows="1"
                                        name="message"
                                        placeholder="search a rocket"
                                    />
                                </label>
                            </div>
                            <label htmlFor="language-select">
                                <select
                                    id="language-select"
                                    className="w-[10vw] shadow-md shadow-gray-300 text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={() => searchRockets(8)}
                                >
                                    <option value="4">Language</option>
                                    <option value="3">Java/Angular</option>
                                    <option value="7">React/Node</option>
                                    <option value="0">PHP/Symfony</option>
                                </select>
                            </label>
                            <label htmlFor="language-Type">
                                <select
                                    id="type-select"
                                    className="w-[10vw] shadow-md shadow-gray-300 text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={() => searchRockets(2)}
                                >
                                    <option value="Language">Type</option>
                                    <option value="Java/Angular">Mobile</option>
                                    <option value="React/Node">Web</option>
                                    <option value="PHP/Symfony">
                                        Software
                                    </option>
                                </select>
                            </label>
                            <label htmlFor="language-select">
                                <select
                                    id="sector-select"
                                    className="w-[10vw] text-black  shadow-md shadow-gray-300 font-bold cursor-pointer hover:bg-yellow-200  py-2 my-6 rounded-md "
                                    onChange={() => searchRockets(6)}
                                >
                                    <option value="Language">Sector</option>
                                    <option value="Java/Angular">
                                        Bank/Insurance
                                    </option>
                                    <option value="React/Node"></option>
                                    <option value="PHP/Symfony">
                                        Aeronautics
                                    </option>
                                    <option value="PHP/Symfony">
                                        Aerospace
                                    </option>
                                    <option value="PHP/Symfony">
                                        Transportation
                                    </option>
                                    <option value="PHP/Symfony">
                                        Construction industry
                                    </option>
                                    <option value="PHP/Symfony">
                                        {' '}
                                        Telecoms
                                    </option>
                                </select>
                            </label>
                            <label htmlFor="language-select">
                                <select
                                    id="language-select"
                                    className="w-[10vw] text-black  shadow-md shadow-gray-300 font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={(e) => searchRockets(10)}
                                >
                                    <option value="Language">City</option>
                                    <option value="Lyon">Lyon</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Aix-en-Provence">
                                        Aix-en-Provence
                                    </option>
                                    <option value="Bruxelles">Bruxelles</option>
                                    <option value="Orléans">Orléans</option>
                                    <option value="Casablanca">
                                        Casablanca
                                    </option>
                                    <option value="Niort">Niort</option>
                                    <option value="Nantes">Nantes</option>
                                    <option value="Strasbourg">
                                        Strasbourg
                                    </option>
                                    <option value="Brest">Brest</option>
                                </select>
                            </label>
                        </form>
                    </div>
                </div>
                <div className="h-auto w-[60%] ml-52 flex flex-row">
                    <div className="h-[60vw]">
                        <input
                            className="w-[70vw] ml-36 mt-5"
                            onChange={(e) => setCursorValue(e.target.value)}
                            type="range"
                            min="0"
                            max="1300"
                            value={cursorValue}
                            step="10"
                        ></input>
                        <button
                            onClick={() => {
                                destroyRocket(rocketSelected)
                            }}
                            className="text-red-80 rounded-md text-2xl py-2 px-4 fixed ml-4 mb-3 mt-10"
                        >
                            <Image src={ufo} width={100} height={100} />
                        </button>
                        {rockets.length
                            ? rockets.map((rocket, i) => (
                                  <div className={`w-[100vw] h-[10vh]`}>
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
            </div>
            {openPopup ? (
                <Popup
                    content={
                        <div className="text-center">
                            <p className="text-center text-xl mb-2 font-[600]">
                                projet numero {rocketSelected.id + 1}
                            </p>
                            <p>Curabitur urna quam, commodo non dictum at,</p>
                            <p>Curabitur urna quam, commodo non dictum at,</p>
                            <button
                                onClick={() =>
                                    router.push(
                                        `/project-details/${
                                            rocketSelected.id + 1
                                        }`
                                    )
                                }
                                className="bg-red-500 py-2 px-4 mt-5 hover:bg-red-700 rounded-md"
                            >
                                Open project
                            </button>
                        </div>
                    }
                    handleClose={() => setOpenPopup(false)}
                />
            ) : null}
        </Layout>
    )
}
