import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Store } from './frame'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import { easeLinear } from 'd3-ease'

const Progress = styled(({ className }) => {
  const {
    state: { clipCurrent, clipTotal },
  } = useContext(Store)

  if (clipTotal === 0) {
    return null
  }

  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={100}
      duration={clipTotal}
      easingFunction={easeLinear}
    >
      {(value) => {
        return (
          <CircularProgressbar
            {...{
              className,
              value,
              strokeWidth: 50,
              styles: buildStyles({
                strokeLinecap: 'butt',
                trailColor: '#000',
                pathColor: '#fff',
                pathTransition: 'none',
              }),
            }}
          />
        )
      }}
    </AnimatedProgressProvider>
  )
})`
  height: 25px;
  border: none;
`

const Controls = styled(({ className }) => {
  return (
    <div {...{ className }}>
      <Progress />
    </div>
  )
})`
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
`

export default Controls
