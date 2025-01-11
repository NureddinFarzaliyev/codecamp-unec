import React from 'react'
import Main from './components/main/Main'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Details from './components/details/Details'
import RootLayout from './components/ui/RootLayout'

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
    <RouterProvider router={router} />
  )
}

export default App
