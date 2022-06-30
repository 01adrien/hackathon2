import React from 'react'
import { useState } from 'react'
import style from '../styles/dashboard.module.css'
import Layout from '../components/layout'
// import codeImg from '../public/assets/projects/code.jpg'
// import Link from 'next/link'
// import Image from 'next/image'

export default function dashboard() {
    const [filterLang, setFilterLang] = useState('')

    const handleChange = (value) => {
        setFilterLang(!filterLang)
    }

    return (
        <Layout pageTitle={'dashboard'}>
            <div className={style.dashboardbg}>
                <div className="w-[90%] flex absolute top-0 right-0">
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
                <div className="flex py-16 ">
                    <div className="flex flex-col absolute left-0 mx-8 w-[10%]">
                        <h2 className="py-4 left-0 text-white uppercase font-bold text-center">
                            Search your Rocket
                        </h2>
                        <form className="my-6">
                            <label htmlFor="language-select">
                                <select
                                    id="language-select"
                                    className="w-[100%] text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
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
                            <label htmlFor="language-select">
                                <select
                                    id="language-select"
                                    className="w-[100%] text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
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
                                    id="language-select"
                                    className="w-[100%] text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
                                >
                                    <option value="Language">Sector</option>
                                    <option value="Java/Angular">
                                        Banque/Assurance
                                    </option>
                                    <option value="React/Node">
                                        React/Node
                                    </option>
                                    <option value="PHP/Symfony">
                                        PHP/Symfony
                                    </option>
                                </select>
                            </label>
                            <label htmlFor="language-select">
                                <select
                                    id="language-select"
                                    className="w-[100%] text-black font-bold cursor-pointer hover:bg-yellow-200 py-2 my-6 rounded-md "
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
            </div>
        </Layout>
    )
}
