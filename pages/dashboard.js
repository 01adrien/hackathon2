/* eslint-disable */
import React, { useState } from 'react'
import style from '../styles/dashboard.module.css'
import Layout from '../components/layout'
import Image from 'next/image'
import redPlanetImg from '../public/images/redPlanet.png'
// import Link from 'next/link'

export default function dashboard() {
    const [filterLang, setFilterLang] = useState('')

    const handleChange = (value) => {
        setFilterLang(!filterLang)
    }

    return (
        <Layout pageTitle={'dashboard'}>
            <div className={style.dashboardbg}>
                <div className="w-[80%] flex absolute top-0 right-0 pt-2">
                    <p className="text-lg text-white uppercase font-bold ml-[120px]">
                        design
                    </p>
                    <p className="text-lg text-white uppercase font-bold ml-[180px]">
                        realization
                    </p>
                    <p className="text-lg text-white uppercase font-bold ml-[180px]">
                        validation
                    </p>
                </div>

                <div className="flex flex-col absolute py-16 left-0 mr-12 w-[18%] h-full p-18 bg-black shadow-lg shadow-gray-400">
                    <p className="py-6 text-[26px] left-0 text-white uppercase font-bold text-center ">
                        Search your Rocket
                    </p>
                    <form className="my-6">
                        <div className="flex flex-col text-left w-[90%]rounded-md m-auto border-gray-500 text-[#7F7F7F]  p-2">
                            <div className=" flex flex-col w-[100%] shadow-md shadow-gray-300 rounded-md m-auto  text-[#7F7F7F] bg-white my-6">
                                <label
                                    htmlFor="find a project"
                                    className="text-xs sm:text-base py-1"
                                >
                                    <textarea
                                        type="textarea"
                                        className="w-[100%] text-black font-bold hover:bg-yellow-200 "
                                        rows="1"
                                        name="message"
                                        onChange={(e) => e.target.value}
                                        placeholder="search a rocket"
                                    />
                                </label>
                            </div>
                            <label htmlFor="language-select">
                                <select
                                    id="language-select"
                                    className="w-[100%] shadow-md shadow-gray-300 text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
                                >
                                    <option value="Language">Language</option>
                                    <option value="Java/Angular">
                                        Java/Angular
                                    </option>
                                    <option value="React/Node">
                                        React/Node
                                    </option>
                                    <option value="PHP/Symfony">
                                        PHP/Symfony
                                    </option>
                                </select>
                            </label>
                            <label htmlFor="language-Type">
                                <select
                                    id="type-select"
                                    className="w-[100%] shadow-md shadow-gray-300 text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
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
                                    className="w-[100%] text-black  shadow-md shadow-gray-300 font-bold cursor-pointer hover:bg-yellow-200  py-2 my-6 rounded-md "
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
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
                                    className="w-[100%] text-black  shadow-md shadow-gray-300 font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
                                >
                                    <option value="Language">City</option>
                                    <option value="Lyon">Lyon</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Aix-en-Provence">
                                        Aix-en-Provence
                                    </option>
                                    <option value="Bruxelles">Bruxelles</option>
                                    <option value="Orl??ans">Orl??ans</option>
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
                        </div>
                    </form>
                </div>
                <div className="flex fixed right-0 mr-[-56] justify-center items-center text-white my-36 ">
                    <Image
                        src={redPlanetImg}
                        alt="mars-picture"
                        className="rounded-l-full"
                        width={180}
                        height={350}
                    ></Image>
                </div>
            </div>
        </Layout>
    )
}
