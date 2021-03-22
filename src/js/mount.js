import { useEffect } from 'react'
import { StateStore } from './Store'
import { useContext } from 'react'

const Mount = ({ data, children }) => {
  const { dispatch } = useContext(StateStore)

  useEffect(() => {
    dispatch({
      type: 'mountData',
      ...data,
    })
  }, [])

  return children
}

export default Mount
