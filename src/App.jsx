import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app/Routes'

const App = () => {
  return <RouterProvider router={router} />
}

export default App
