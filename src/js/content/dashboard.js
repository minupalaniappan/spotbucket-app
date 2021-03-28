import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Toolbar from '../controls/toolbar'
import AthletePicture from '../athlete/athletePicture'
import AthleteDescription from '../athlete/athleteDescription'
import ProgressBar from '../content/progress'
import ControlCollection from '../controls/controlCollection'
import ToggleCollection from '../controls/toggleCollection'
import AthleteStats from '../athlete/athleteStats'
import { WIDTHS } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;

  ${({ padded }) => (padded ? `padding: 0 ${WIDTHS.small}` : '')};
`

const Col = styled.div`
  display: flex;
  flex-direction: column;

  ${({ grow }) => (grow ? 'flex-grow: 1;' : '')};
  ${({ top }) => (top ? 'align-items: flex-start' : '')};
  ${({ paddedRight }) => (paddedRight ? `padding-right: ${WIDTHS.small}` : '')};
`

const Dashboard = () => {
  return (
    <Container>
      <Toolbar />
      <Row padded>
        <Col paddedRight>
          <AthletePicture />
        </Col>
        <Col grow>
          <AthleteDescription />
          <Row>
            <Col grow>
              <AthleteStats />
              <ProgressBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
