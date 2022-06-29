import { createContext, useState } from 'react'

const createRocketContext = createContext()

export function CreateRocketContextProvider({ children }) {
    const [projectData, setProjectData] = useState({})
    const [completedStep, setCompletedStep] = useState(false)
    const [activeStep, setActiveStep] = useState(0)

    return (
        <createRocketContext.Provider
            value={{
                projectData,
                setProjectData,
                activeStep,
                setActiveStep,
                completedStep,
                setCompletedStep,
            }}
        >
            {children}
        </createRocketContext.Provider>
    )
}

export default createRocketContext
