import React from 'react'
import Navbar from './Components/Navbar'
import Homecleaning from './Components/Homecleaning'
import Scrollimg from './Components/Scroll-img'
import ManageTodo from './Components/Manage-todo'
import PCRTestPage from './Components/PCR-athome'
import SalonAtHomePage from './Components/Women-salon'

const page = () => {
  return (
    <>
      <Navbar />
      <Homecleaning />
      <Scrollimg/>
      <ManageTodo/>
      <PCRTestPage/>
      <SalonAtHomePage/>
    </>
  )
}

export default page