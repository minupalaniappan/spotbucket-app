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
  const data = await fetch(`${HOST}/stats?name=${value}`)
    .then((d) => d.json())
    .then((e) => e)

  return data
}

export const fetchNextPage = async ({ playerName, page }) => {
  const e = await fetch(
    `${HOST}?${new URLSearchParams({
      name: playerName,
      page: page,
    })}`
  ).then((e) => e.json())

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
  insertRoot()

  render(<Frame {...data} />, document.getElementById('cherry-root'))
}

const execute = async (value) => {
  value = 'Bradley Beal'

  if (value === '') {
    return
  }

  let data = await fetchData(value)

  let { stats } = await fetchStatsData(value)

  if (data && stats) {
    data = {
      ...data,
      stats,
    }

    install(data)
  }
}

export { install, execute, HOST }
