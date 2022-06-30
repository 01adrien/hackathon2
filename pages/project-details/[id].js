/* eslint-disable react/jsx-key */
import Image from 'next/image'
import workInProgressImg from '../../public/images/work-in-progress.png'
import marsImg from '../../public/images/mars-removebg.png'
import reactImg from '../../public/images/react.png'
import nodeImg from '../../public/images/node.png'
import javaImg from '../../public/images/java.png'
import phpImg from '../../public/images/php.png'
import jsImg from '../../public/images/js.png'
import rocketImg from '../../public/images/rocket_stop.png'
import flecheImg from '../../public/images/flecherouge.png'
import style from '../../styles/projectDetails.module.css'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProjectDetails() {
    const [project, setProject] = useState([])
    console.log(project)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/project?id=${id}`)
            .then((res) => res.data)
            .then((data) => {
                setProject(data)
                console.log(data)
            })
    }, [id])

    return (
        <Layout pageTitle="project-details">
            {project.map((data) => (
                <div className={style.projectDetailsBody}>
                    <div className={style.leftSide}>
                        <div className={style.marsDiv}>
                            <Image
                                src={marsImg}
                                alt="mars-img"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className={style.projectDescription}>
                            <h1 className={style.projectDescriptionTitle}>
                                PROJECT DESCRIPTION
                            </h1>
                            <p className={style.projectDescriptionText}>
                                {data.description}
                            </p>
                        </div>
                        <div className={style.flecheDiv}>
                            <Image
                                src={flecheImg}
                                alt="fleche-img"
                                width={100}
                                height={80}
                                className={style.flecheRouge}
                                onClick={() => router.push('/dashboard')}
                            />
                        </div>
                    </div>

                    <div className={style.middle}>
                        <div className={style.categoryBox}>
                            <div className={style.upBorder}></div>
                            <div className={style.titles}>
                                <h1 className={style.mainTitle}>{data.name}</h1>
                                <h2 className={style.cityTitle}>{data.city}</h2>
                            </div>
                            <div className={style.progress}>
                                <h2 className={style.progressTitle}>
                                    Progression
                                </h2>
                                <progress
                                    className={style.progressBar}
                                    max="100"
                                    value="64"
                                ></progress>
                                <h3 className={style.progressTitle2}>64%</h3>
                            </div>
                            <div className={style.projectDetails}>
                                <div className={style.projectBox1}>
                                    <h3 className={style.boxTitle}>
                                        SPENT DAYS
                                    </h3>
                                    <h3 className={style.boxNumber}>45</h3>
                                </div>
                                <div className={style.projectBox2}>
                                    <h3 className={style.boxTitle}>STAFF</h3>
                                    <h3 className={style.boxNumber}>8</h3>
                                </div>
                                <div className={style.projectBox3}>
                                    <h3 className={style.boxTitle}>
                                        TOTAL DAYS
                                    </h3>
                                    <h3 className={style.boxNumber}>70</h3>
                                </div>
                            </div>
                            <div className={style.workDiv}>
                                <Image
                                    src={workInProgressImg}
                                    alt="work-img"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={style.rigthSide}>
                        <div className={style.crewToolsDiv}>
                            <h1 className={style.crewToolsTitle}>CREW TOOLS</h1>
                            <div className={style.crewToolsImg}>
                                {data.tech1 === 'JavaScript' ||
                                data.tech2 === 'JavaScript' ||
                                data.tech3 === 'JavaScript' ? (
                                    <div className={style.nodeDiv}>
                                        <Image
                                            src={jsImg}
                                            alt="js-img"
                                            width={80}
                                            height={90}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                                {data.tech1 === 'Node' ||
                                data.tech2 === 'Node' ||
                                data.tech3 === 'Node' ? (
                                    <div className={style.nodeDiv}>
                                        <Image
                                            src={nodeImg}
                                            alt="node-img"
                                            width={80}
                                            height={90}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                                {data.tech1 === 'React' ||
                                data.tech2 === 'React' ||
                                data.tech3 === 'React' ? (
                                    <div className={style.reactkDiv}>
                                        <Image
                                            src={reactImg}
                                            alt="react-img"
                                            width={100}
                                            height={90}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                                {data.tech1 === 'Java' ||
                                data.tech2 === 'Java' ||
                                data.tech3 === 'Java' ? (
                                    <div className={style.javaDiv}>
                                        <Image
                                            src={javaImg}
                                            alt="java-img"
                                            width={80}
                                            height={100}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                                {data.tech1 === 'PHP' ||
                                data.tech2 === 'PHP' ||
                                data.tech3 === 'PHP' ? (
                                    <div className={style.phpDiv}>
                                        <Image
                                            src={phpImg}
                                            alt="java-img"
                                            width={100}
                                            height={70}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div>
                                <Image
                                    src={rocketImg}
                                    alt="java-img"
                                    width={300}
                                    height={400}
                                    className={style.rocket}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
    )
}
