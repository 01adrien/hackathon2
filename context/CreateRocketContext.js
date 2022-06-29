import { createContext, useState } from 'react'

const createRocketContext = createContext()

export function CreateRocketContextProvider({ children }) {
    const [projectData, setProjectData] = useState({})
    const [completedStep, setCompletedStep] = useState(false)

    return (
        <createRocketContext.Provider
            value={{
                projectData,
                setProjectData,

                completedStep,
                setCompletedStep,
            }}
        >
            {children}
        </createRocketContext.Provider>
    )
}

export default createRocketContext
