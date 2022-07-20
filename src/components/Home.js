import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Home({ images, token }) {

const[homeImage, setHomeImage] = useState('')

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
return(

  // <div className='cover-image-container'>
  //   {images.slice(1, 15).map((coverImage, index) => (
  //     <div className='cover-image' key={index}>
  //     {coverImage ? <img className='home-image'  alt='cover-img' src={coverImage.cover_image} />: null}
  //     </div>
  //   ))}
  // </div>
  <div>
 
  </div>
 
)
}

export default Home;