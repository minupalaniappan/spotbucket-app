import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Toolbar from '../controls/toolbar'
import AthletePicture from '../athlete/athletePicture'
import AthleteDescription from '../athlete/athleteDescription'
import ProgressBar from '../content/progress'
import ControlCollection from '../controls/controlCollection'
import ToggleCollection from '../controls/toggleCollection'
import AthleteStats from '../athlete/athleteStats'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Dashboard = () => {
  return (
    <Column>
      <Toolbar />
      <Row>
        <Column>
          <AthletePicture />
        </Column>
        <Column>
          <AthleteDescription />
          <Row>
            <Column>
              <AthleteStats />
              <ProgressBar />
            </Column>
            <Column>
              <ControlCollection />
            </Column>
          </Row>
        </Column>
        <Column>
          <ToggleCollection />
        </Column>
      </Row>
    </Column>
  )
}

export default Dashboard
