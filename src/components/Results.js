
import React from "react";
import '../index.css'

function Results({ images }) {
  if(!images.length){
    return <h2>no images found!</h2>
  }
  // console.log(images.results[0].thumb)
  // Inside the onClick function is where you route the viewers to the sub component
  const onClick = (event) => {
    if(event.target.id === '1993487'){
      console.log(true)
    }else{
      console.log(false)
    }
    console.log(event.target.id)
  }
  return (
    <div className='gallery'>
    {images.map((image) => (
      <div key={image.id} className='image-results' >
        <img onClick={onClick} src={image.thumb} id={image.id}/>
      </div>
    ))}
    </div>
  )
}

export default Results;

