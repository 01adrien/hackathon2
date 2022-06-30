import React, { useEffect } from 'react'
import { CreateRocketContextProvider } from '../../context/CreateRocketContext'
import DescriptionForm from './DescriptionForm'
import MainDataForm from './MainDataForm'
import ProgressStepper from './ProgressStepper'
import ProjectTypeForm from './ProjectTypeForm'
import SectorForm from './SectorForm'
import Summary from './Summary'
import TechnoForm from './TechnoForm'
import styles from '../../styles/launch.module.css'

export default function CreateForm({
    activeStep,
    setActiveStep,
    setIsLaunching,
    setColor,
    board,
}) {
    useEffect(() => {}, [activeStep])

    return (
        <CreateRocketContextProvider>
            <div className={styles.formBox}>
                <div className={styles.topBox}></div>
                <h1 className={styles.title}>DEFINE YOUR MISSION</h1>
                <div className="flex flex-col h-[100%] justify-center items-center">
                    {activeStep === 0 && <MainDataForm />}
                    {activeStep === 1 && <SectorForm />}
                    {activeStep === 2 && (
                        <ProjectTypeForm setColor={setColor} />
                    )}
                    {activeStep === 3 && <TechnoForm />}
                    {activeStep === 4 && <DescriptionForm />}
                    {activeStep === 5 && <Summary board={board} />}
                    <ProgressStepper
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        setIsLaunching={setIsLaunching}
                    />
                </div>
                <div className={styles.bottomBox}></div>{' '}
            </div>
        </CreateRocketContextProvider>
    )
}

// import React, { useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import styles from "../../styles/Seances.module.css";
// import MainDataForm from "../../components/SeanceForm/MainDataForm";
// import UploadMediaForm from "../../components/SeanceForm/UploadMediaForm";
// import DescriptionForm from "../../components/SeanceForm/DescriptionForm";
// import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
// import { CreateSeanceContextProvider } from "../../context/createSeanceContext";
// import GreyBurger from "../../components/GreyBurger/GreyBurger";
// import AddClientsForm from "../../components/SeanceForm/AddClientsForm";
// import Summary from "../../components/SeanceForm/Summary";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CreateSeance() {
//   const [activeStep, setActiveStep] = useState(0);

//   return (
//     <CreateSeanceContextProvider>
//       <Layout pageTitle="Création d'une séance" shape={true}>
//         <GreyBurger grey={false} />
//         <div>
//           <div className={styles.createContainer}>
//             <h1 className={styles.create_title}>Création de la séance</h1>

//             {activeStep === 0 && <MainDataForm />}
//             {activeStep === 1 && <UploadMediaForm />}
//             {activeStep === 2 && <DescriptionForm />}
//             {activeStep === 3 && <AddClientsForm />}
//             {activeStep === 4 && <Summary />}

//             <ProgressStepper
//               activeStep={activeStep}
//               setActiveStep={setActiveStep}
//               className={styles.progressStepper}
//             />
//           </div>
//           <ToastContainer
//             position="bottom-center"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//           />
//         </div>
//       </Layout>
//     </CreateSeanceContextProvider>
//   );
// }
