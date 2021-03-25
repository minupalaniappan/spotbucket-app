import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Toolbar from '../controls/toolbar'
import AthletePicture from '../athlete/athletePicture'
import AthleteDescription from '../athlete/athleteDescription'
import ProgressBar from '../content/progress'
import ControlCollection from '../controls/controlCollection'
import ToggleCollection from '../controls/toggleCollection'
import AthleteStats from '../athlete/athleteStats'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;

  ${({ grow }) => (grow ? 'flex-grow: 1;' : '')};
  ${({ top }) => (top ? 'align-items: flex-start' : '')};
`

const Dashboard = () => {
  return (
    <Container>
      <Toolbar />
      <Row>
        <Col>
          <AthletePicture />
        </Col>
        <Col>
          <AthleteDescription />
          <Row>
            <Col grow>
              <AthleteStats />
              <ProgressBar />
            </Col>
          </Row>
        </Col>
        <Col grow>
          <ToggleCollection />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
