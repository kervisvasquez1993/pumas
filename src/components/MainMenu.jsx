import React from 'react'
import { Outlet } from 'react-router-dom'

const MainMenu = ({item}) => {
    console.log(item)
  return (
    <Outlet />
  )
}

export default MainMenu