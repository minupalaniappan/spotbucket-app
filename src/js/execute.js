import fetch from 'node-fetch'
import { render } from 'react-dom'
import React from 'react'
import { Frame } from './frame.jsx'

const HOST = 'http://localhost:5000'

export const fetchData = async (value) => {
  const data = await fetch(`${HOST}?name=${value}`)
    .then((d) => d.json())
    .then((e) => e)

  return data
}

export const fetchStatsData = async (value) => {
  const data = fetch(`${HOST}/stats?name=${value}`)
    .then((d) => d.json())
    .then((e) => e)

  return data
}

export const fetchPage = async ({ playerName, page }) => {
  const data = await fetch(
    `${HOST}?${new URLSearchParams({
      name: playerName,
      page: page,
    })}`
  )
    .then((e) => e.json())
    .then(({ plays: plays_, hasNextPage }) => ({
      plays: plays_.filter(({ videoUrl: { videoUrl } }) => videoUrl.length > 0),
      hasNextPage,
    }))

  return data
}

const insertRoot = () => {
  const node = window.document.createElement('div')

  node.setAttribute('id', 'cherry-root')

  window.document.body.appendChild(node)
}

const install = () => {
  insertRoot()

  render(<Frame />, document.getElementById('cherry-root'))
}

const execute = async () => {
  install()
}

export { install, execute, HOST }
