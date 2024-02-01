import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useStateContext} from "../contexts/ContextProvider.jsx"
const DefaultLayout = () => {

  const {user,token} = useStateContext()

  if(!token){
    return <Navigate to="/Login"/>
  }
  return (
    <div>
      Default
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
