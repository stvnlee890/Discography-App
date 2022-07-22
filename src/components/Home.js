import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

const Home = ({ images, token }) => {

return(
  <div className='home-component'>
    <div className='home-introduction'>
    <h1>
      Welcome
    </h1>
    <p className='home-description'>
      Search your favorite artists and read more about them!
    </p>
    </div>
  <div className='home-container'>
    <img src={require('./images/Vince-Staples.jpeg')} height={200} width={200} alt='vince staples'/> 
    <img src={require('./images/Devonte-Hynes.jpeg')} height={200} width={200} alt='devonte hynes'/> 
    <img src={require('./images/Hyukoh.jpeg')} height={200} width={200} alt='hyukoh'/> 
    <img src={require('./images/Little-Dragon.jpeg')} height={200} width={200} alt='little dragon'/> 
  </div> 
  </div>
)
}

export default Home;