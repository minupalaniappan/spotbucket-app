import fetch from 'node-fetch'
import { render } from 'react-dom'
import React from 'react'
import Frame from './frame.jsx'

const fetchData = async (value) => {
  const HOST = 'http://localhost:5000'

  const data = await fetch(`${HOST}?name=${value}`)
    .then((d) => d.json())
    .then((e) => e)

  return data
}

const insertRoot = () => {
  const node = window.document.createElement('div')

  node.setAttribute('id', 'cherry-root')

  window.document.body.appendChild(node)
}

const install = (data) => {
  insertRoot()

  render(<Frame {...data} />, document.getElementById('cherry-root'))
}

const execute = async (value) => {
  if (value === '') {
    return
  }

  const data = await fetchData(value)

  if (data) {
    install(data)
  }
}

export { install, execute }
