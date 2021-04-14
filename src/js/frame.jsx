import React from 'react'
import { FontProvider } from './theme'
import { DataProvider } from './Provider'
import { StateStore } from './Store'
import SpotBucket from './spotbucket'
import Catalog from './catalog'

const Frame = () => {
  const { Provider } = StateStore

  return (
    <DataProvider {...{ Provider }}>
      <FontProvider>
        <SpotBucket />
        <Catalog />
      </FontProvider>
    </DataProvider>
  )
}

export { Frame }
