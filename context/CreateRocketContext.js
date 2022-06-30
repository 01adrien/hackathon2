import { createContext, useEffect, useState } from 'react'

const createRocketContext = createContext()

export function CreateRocketContextProvider({ children }) {
    const [projectData, setProjectData] = useState({})
    const [completedStep, setCompletedStep] = useState(false)
    const [isLaunching, setIsLaunching] = useState(false)
    const [color, setColor] = useState('red')

    return (
        <createRocketContext.Provider
            value={{
                color,
                setColor,
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
