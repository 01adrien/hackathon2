import { createContext, useState } from 'react'

const createRocketContext = createContext()

const TechnoList = [
    {
        id: 1,
        name: 'Python',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'JavaScript',
    },
    {
        id: 4,
        name: 'C#',
    },
    {
        id: 5,
        name: 'PHP',
    },
]

export function CreateRocketContextProvider({ children }) {
    const [projectData, setProjectData] = useState({})
    const [completedStep, setCompletedStep] = useState(false)
    const [isLaunching, setIsLaunching] = useState(false)
    const [color, setColor] = useState('red')
    const [technolist, setTechnolist] = useState(TechnoList)

    return (
        <createRocketContext.Provider
            value={{
                technolist,
                setTechnolist,
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
