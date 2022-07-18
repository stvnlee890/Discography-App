
import React from "react";
import '../index.css'

function Results({ images }) {
  if(!images.length){
    return <h2>no images found!</h2>
  }
  // console.log(images.results[0].thumb)
  const onClick = (event) => {
    if(images.id === 1993487){
      console.log(true)
    }
    console.log(event.target)
  }
  return (
    <div className='gallery'>
    {images.map((image) => (
      <div key={image.id} className='image-resutls' >
        <img onClick={onClick} src={image.thumb} id={image.id}/>
      </div>
    ))}
    </div>
  )
}

export default Results;

