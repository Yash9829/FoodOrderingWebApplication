import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

export default function Home() {
  return (
    <div style={{backgroundColor : 'lightgrey'}}>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div style = {{display : "flex", flexDirection : "row"}}>
        <Card />
        <Card />
      </div>
      <div style={{backgroundColor : 'white'}}>
        <Footer />
      </div>
    </div>
  )
}
