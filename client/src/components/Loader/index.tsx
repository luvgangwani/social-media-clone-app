import React from 'react'
import { LoaderProps } from '../../types'

function Loader({show}: LoaderProps) {
  return (
    show
    ?
    <div>Loading...</div>
    :
    <></>
  )
}

export default Loader