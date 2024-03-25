import React from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './Signin'

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Signin/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])



  return (
    <div>
    <RouterProvider router={appRouter}>

    </RouterProvider>
 
    </div>
  )
}

export default Body