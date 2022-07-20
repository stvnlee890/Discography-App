import { Link } from 'react-router-dom'

function Home({ images }) {
console.log(images)

return(
  <div className='cover-image-container'>
    {images.slice(1, 23).map((coverImage, index) => (
      <div className='cover-image' key={index}>
      {coverImage ? <img className='home-image'  alt='cover-img' src={coverImage.cover_image} />: null}
      </div>
    ))}
  </div>
 
)
}

export default Home;