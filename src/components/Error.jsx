import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=  useRouteError()
  return (
    <div>
        <h1>Oops Something went wrong</h1>
         <h2>{err.status}-{err.statusText}</h2>
          <h3>{err.data}</h3>
    </div>
  )
}

export default Error