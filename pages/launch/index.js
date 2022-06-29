import CreateForm from '../../components/launch/CreateForm'
import Rocket from '../../components/launch/Rocket'
import Layout from '../../components/layout'
import { CreateRocketContextProvider } from '../../context/CreateRocketContext'
import styles from '../../styles/launch.module.css'

export default function Launch() {
    return (
        <CreateRocketContextProvider>
            <Layout title="Create a Project">
                <div className={styles.launchBody}>
                    <CreateForm />
                    <Rocket />
                </div>
            </Layout>
        </CreateRocketContextProvider>
    )
}
