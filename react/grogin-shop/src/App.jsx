import React, { useEffect } from 'react'
import Main from './components/main/Main'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Details from './components/details/Details'
import RootLayout from './components/ui/RootLayout'
import Contexts from './context/Contexts'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="/meals/:mealId" element={<Details />} />
      </Route>
    )
  )

  return (
    <Contexts>
      <RouterProvider router={router} />
    </Contexts>
  )
}

export default App
