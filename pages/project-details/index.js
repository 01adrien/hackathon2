import Image from 'next/image'
import workInProgressImg from '../../public/images/work-in-progress.png'
import marsImg from '../../public/images/mars-removebg.png'
import style from '../../styles/projectDetails.module.css'

export default function ProjectDetails() {
    return (
        <>
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
                </div>
                <div className={style.middle}>
                    <div className={style.categoryBox}>
                        <div className={style.upBorder}></div>
                        <div className={style.titles}>
                            <h1 className={style.mainTitle}>Project name</h1>
                            <h2 className={style.cityTitle}>City</h2>
                        </div>
                        <div className={style.progress}>
                            <h2 className={style.progressTitle}>Progression</h2>
                            <progress
                                className={style.progressBar}
                                max="100"
                                value="70"
                            ></progress>
                        </div>
                        <div className={style.projectDetails}>
                            <div className={style.projectBox1}></div>
                            <div className={style.projectBox2}></div>
                            <div className={style.projectBox3}></div>
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
                <div className={style.rightSide}></div>
            </div>
        </>
    )
}
