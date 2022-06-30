import React, { useContext } from 'react'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import createRocketContext from '../../context/CreateRocketContext'

export default function ProgressStepper({
    activeStep,
    setActiveStep,
    setIsLaunching,
}) {
    const router = useRouter()

    const { projectData } = useContext(createRocketContext)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        setIsLaunching(false)
    }

    const launch = async () => {
        console.log(projectData)
        setIsLaunching(true)
        setTimeout(() => router.push('./dashboard'), 4000)
    }

    if (activeStep < 5) {
        return (
            <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                sx={{
                    height: '80px',
                    width: '25vw',
                    position: 'absolute',
                    bottom: '100px',
                    background: 'none',
                    '& .MuiLinearProgress-bar': {
                        background: '#F98F83',
                    },
                    '& .MuiLinearProgress-root': {
                        background: '#DADADA',
                    },
                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === 6}
                        sx={{ color: 'black' }}
                    >
                        <ArrowCircleRightIcon
                            sx={{
                                width: '50px',
                                height: '50px',
                            }}
                        />
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{ color: 'black' }}
                    >
                        <ArrowCircleLeftIcon
                            sx={{
                                width: '50px',
                                height: '50px',
                            }}
                        />
                    </Button>
                }
            />
        )
    } else {
        return (
            <div
                style={{
                    height: '80px',
                    position: 'absolute',
                    bottom: '100px',
                    background: 'none',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                }}
            >
                <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{ color: 'black' }}
                >
                    <ArrowCircleLeftIcon
                        sx={{
                            width: '40px',
                            height: '40px',
                        }}
                    />
                </Button>

                <Button
                    onClick={launch}
                    style={{
                        width: '200px',
                        height: '100px',
                        background: 'red',
                        color: 'white',
                        borderRadius: '20px',
                        fontWeight: 'bolder',
                        border: 'solid black 0.4rem',
                        fontSize: '1.5rem',
                    }}
                >
                    LAUNCH
                </Button>
            </div>
        )
    }
}
