import style from '../../styles/launch.module.css'

export default function Launch() {
    return (
        <>
            <div className={style.launchBody}>
                <div className={style.leftSide}>
                    <div className={style.categoryBox}>
                        <div className={style.upBorder}></div>
                        <h1>Create your project !</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
