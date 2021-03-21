import fetch from 'node-fetch'
import { render } from 'react-dom'
import React from 'react'
import { Frame } from './frame.jsx'
import BradleyBeal from '../fixtures/bradley_beal.json'

const HOST = 'http://localhost:5000'

const fetchData = async (value) => {
  const data = await fetch(`${HOST}?name=${value}`)
    .then((d) => d.json())
    .then((e) => e)

  return data
}

export const fetchNextPage = async ({ playerName, page }) => {
  const nextPageData = await fetch(
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

  return nextPageData
}

const insertRoot = () => {
  const node = window.document.createElement('div')

  node.setAttribute('id', 'cherry-root')

  window.document.body.appendChild(node)
}

const install = (data) => {
  data = BradleyBeal

  insertRoot()

  render(<Frame {...data} />, document.getElementById('cherry-root'))
}

const execute = async (value) => {
  if (value === '') {
    return
  }

  let data = await fetchData(value)

  if (data) {
    install(data)
  }
}

export { install, execute, HOST }
