import React from 'react'
import Navbar from './Components/Navbar'
import Homecleaning from './Components/Homecleaning'
import Scrollimg from './Components/scroll-img'

const page = () => {
  return (
    <>
      <Navbar />
      <Homecleaning />
      <Scrollimg/>
    </>
  )
}

export default page