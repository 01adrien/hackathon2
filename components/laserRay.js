import React from 'react'
// import { Stage, Layer, Text, Line } from 'react-konva'

export default function LaserRay() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text text="Some text on canvas" fontSize={15} />

                <Line
                    x={20}
                    y={200}
                    points={[0, 0, 600, 20]}
                    tension={0.5}
                    closed
                    stroke="red"
                />
            </Layer>
        </Stage>
    )
}
