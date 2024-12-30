import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Services from '../components/Services'
import About from '../components/About'
import Corevalue from '../components/Corevalue'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
    <Header></Header>
    <Intro></Intro>
    <Services></Services>
    <About></About>
    <Corevalue></Corevalue>
    <Footer></Footer>
    
    </div> 
  )
}

export default Home