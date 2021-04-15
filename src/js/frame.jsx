import React, { useContext } from 'react'
import { FontProvider } from './theme'
import { DataProvider } from './Provider'
import { StateStore } from './Store'
import SpotBucket from './spotbucket'
import Catalog from './catalog'
import Preview from './preview'

const AppSwitch = () => {
  const { state } = useContext(StateStore)

  const { container } = state

  if (container === 0) {
    return <Preview />
  } else if (container === 1) {
    return <Catalog />
  } else if (container === 2) {
    return <SpotBucket />
  } else {
    return null
  }
}

const Frame = () => {
  const { Provider } = StateStore

  return (
    <DataProvider {...{ Provider }}>
      <FontProvider>
        <AppSwitch />
      </FontProvider>
    </DataProvider>
  )
}

export { Frame }
