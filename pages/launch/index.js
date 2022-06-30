import { useState } from 'react'
import CreateForm from '../../components/launch/CreateForm'
import Rocket from '../../components/launch/Rocket'
import Layout from '../../components/layout'
import { CreateRocketContextProvider } from '../../context/CreateRocketContext'
import styles from '../../styles/launch.module.css'

export default function Launch() {
    const [activeStep, setActiveStep] = useState(0)
    const [isLaunching, setIsLaunching] = useState(false)
    const [color, setColor] = useState('red')
    const [board, setBoard] = useState([])

    return (
        <CreateRocketContextProvider>
            <Layout title="Create a Project">
                <div className={styles.launchBody}>
                    <CreateForm
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        setIsLaunching={setIsLaunching}
                        setColor={setColor}
                        board={board}
                    />
                    <Rocket
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        isLaunching={isLaunching}
                        color={color}
                        board={board}
                        setBoard={setBoard}
                    />
                </div>
            </Layout>
        </CreateRocketContextProvider>
    )
}
