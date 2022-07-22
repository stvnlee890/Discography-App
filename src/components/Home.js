import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
function Home({ images, token }) {

// const[homeImage, setHomeImage] = useState('')
// let randomId = Math.floor(Math.random() * 1000)
// console.log(randomId)
// const discogUrl = 'https://api.discogs.com/artists/'
// const url = `${discogUrl}${randomId}`
// console.log(url)

// useEffect(() => {
// fetch(url, {
//   headers: {
//     'Authorization': `Discogs token=${token}`,
//     'Accept': 'application/vnd.discogs.v2.html+json'
//   }
// })
// .then(response => {
//   return response.json()
// }) 
// .then(response => {
//   setHomeImage(response);
//   //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
// })
// .catch(console.error);
// }, [])
// console.log(homeImage)
// console.log(images)
return(

  <div className='home-container'>
  
    <img src={require('./images/Vince-Staples.jpeg')} height={200} width={200} alt='vince staples'/> 
    <img src={require('./images/Devonte-Hynes.jpeg')} height={200} width={200} alt='devonte hynes'/> 
    <img src={require('./images/Hyukoh.jpeg')} height={200} width={200} alt='hyukoh'/> 
    <img src={require('./images/Little-Dragon.jpeg')} height={200} width={200} alt='little dragon'/> 
  </div>
  

 
)
}

export default Home;