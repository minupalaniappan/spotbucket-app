import React from 'react'
import fetch from 'node-fetch'
import { render } from 'react-dom'

const fetchData = async (value) => {
  const HOST = 'http://localhost:5000'

  const data = await fetch(`${HOST}?name=${value}`)
    .then((d) => d.json())
    .then((e) => e)

  return data
}

const generateFrame = () => {}

const execute = async (value) => {
  if (value === '') {
    return
  }

  const data = await fetchData(value)

  console.log(data)
}

export default execute
