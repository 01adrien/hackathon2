import React, { useContext } from 'react'
import Techno from './Techno'
import createRocketContext from '../../context/CreateRocketContext'

export default function TechnoForm() {
    const { technolist } = useContext(createRocketContext)

    return (
        <div
            className="flex flex-col justify-around items-center
           w-[80%] p-15"
        >
            {' '}
            What weapons do we need ?
            <div className="flex flex-row justify-center items-center  flex-wrap m-10	 ">
                {technolist?.map((techno) => {
                    return (
                        <Techno
                            key={techno.id}
                            name={techno.name}
                            id={techno.id}
                        />
                    )
                })}
            </div>
            {
                <div className="text-xl font-bold">
                    Dont' forget your blaster sir !
                </div>
            }
        </div>
    )
}
