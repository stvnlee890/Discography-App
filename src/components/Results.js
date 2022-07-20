
import React, { useEffect } from "react";
import '../index.css'
import { Link } from 'react-router-dom'

function Results({ images, searchArtist }) {
  console.log(searchArtist)
  if(!images.length){
    return <h2>no results found!</h2>
  }
  // console.log(images.results[0].thumb)
  // Inside the onClick function is where you route the viewers to the sub component
  // const onClick = (event) => {
  //   if(event.target.id === '1993487'){
  //     console.log(true)
  //   }else{
  //     console.log(false)
  //   }
  //   console.log(event.target.id)
  // }
 
  return (
    <div className='gallery'>
    {/* {images.map((image) => (
      <Link to={`/artists/${image.id}`} key={image.id} style={{textDecoration: 'none'}}>
      <div className='image-results' >
        <img className="image-thumbnail"
        src={image.thumb} 
        id={image.id} 
        alt={searchArtist}
        />
        <p>{image.title}</p>
      </div>
      </Link>
    ))} */}
       
      <Link to={`/artists/${images[0].id}`} key={images.id} style={{textDecoration: 'none'}}>
      <div className='image-results' >
        <img className="image-thumbnail"
        src={images[0].thumb} 
        id={images[0].id} 
        alt={searchArtist}
        />
        <p>{images[0].title}</p>
      </div>
      </Link>
    </div>
  )
}

export default Results;

