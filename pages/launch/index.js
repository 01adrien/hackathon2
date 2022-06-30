import { useState } from 'react'
import CreateForm from '../../components/launch/CreateForm'
import Rocket from '../../components/launch/Rocket'
import Layout from '../../components/layout'
import { CreateRocketContextProvider } from '../../context/CreateRocketContext'
import styles from '../../styles/launch.module.css'

export default function Launch() {
    const [activeStep, setActiveStep] = useState(0)
    const [isLaunching, setIsLaunching] = useState(false)

    return (
        <CreateRocketContextProvider>
            <Layout title="Create a Project">
                <div className={styles.launchBody}>
                    <CreateForm
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        setIsLaunching={setIsLaunching}
                    />
                    <Rocket
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        isLaunching={isLaunching}
                    />
                </div>
            </Layout>
        </CreateRocketContextProvider>
    )
}
