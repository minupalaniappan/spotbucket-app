import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Toolbar from '../controls/toolbar'
import AthletePicture from '../athlete/athletePicture'
import AthleteDescription from '../athlete/athleteDescription'
import ProgressBar from '../content/progress'
import ControlCollection from '../controls/controlCollection'
import ToggleCollection from '../controls/toggleCollection'
import AthleteStats from '../athlete/athleteStats'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} />
        <Col xs={2}>
          <Toolbar />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <AthletePicture />
        </Col>
        <Col xs={6}>
          <AthleteDescription />
          <Row>
            <Col xs={11}>
              <AthleteStats />
              <ProgressBar />
            </Col>
            <Col xs={1}>
              <ControlCollection />
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <ToggleCollection />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
