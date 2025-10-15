import React from 'react'
import Navbar from './Components/Navbar'
import Homecleaning from './Components/Homecleaning'
import Scrollimg from './Components/Scroll-img'
import ManageTodo from './Components/Manage-todo'

const page = () => {
  return (
    <>
      <Navbar />
      <Homecleaning />
      <Scrollimg/>
      <ManageTodo/>
    </>
  )
}

export default page