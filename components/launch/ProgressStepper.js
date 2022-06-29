import React, { useContext } from 'react'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import Link from 'next/link'
import createRocketContext from '../../context/CreateRocketContext'

export default function ProgressStepper({ activeStep, setActiveStep }) {
    const { setProjectData, projectData } = useContext(createRocketContext)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const submitSeanceForm = async () => {
        console.log(projectData)
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
                    width: '80%',
                    background: 'none',
                    flexGrow: 1,
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
                        disabled={activeStep === 5}
                        sx={{ color: '#F98F83' }}
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
                        sx={{ color: '#F98F83' }}
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
            <div>
                <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{ color: '#F98F83' }}
                >
                    <ArrowCircleLeftIcon
                        sx={{
                            width: '40px',
                            height: '40px',
                        }}
                    />
                </Button>

                <Link href="/seances">
                    <Button
                        onClick={submitSeanceForm}
                        style={{
                            width: '150px',
                            height: '50px',
                            background: '#F98F83',
                            color: 'white',
                            borderRadius: '20px',
                            fontWeight: 'bolder',
                        }}
                    >
                        Confirmer
                    </Button>
                </Link>
            </div>
        )
    }
}
