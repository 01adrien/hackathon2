import { createContext, useEffect, useState } from 'react'

const createRocketContext = createContext()

export function CreateRocketContextProvider({ children }) {
    const [projectData, setProjectData] = useState({})
    const [completedStep, setCompletedStep] = useState(false)
    const [isLaunching, setIsLaunching] = useState(false)

    return (
        <createRocketContext.Provider
            value={{
                projectData,
                setProjectData,
                isLaunching,
                setIsLaunching,
                completedStep,
                setCompletedStep,
            }}
        >
            {children}
        </createRocketContext.Provider>
    )
}

export default createRocketContext
