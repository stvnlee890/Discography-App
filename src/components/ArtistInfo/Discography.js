import { useEffect, useState } from 'react'

const Discography = ({ artistId }) => {

  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const discogUrl = 'https://api.discogs.com/artists/'
  const[releases, setReleases] = useState()
  const[error, setError] = useState(false)
  const[count, setCount] = useState(1)

  const getReleaseApi = () => {
    fetch(`${discogUrl}${artistId}/releases?page=${count}&per_page=10`, {
      headers: {
        'Authorization': `Discogs token=${token}`,
        'Accept': 'application/vnd.discogs.v2.html+json'
      },
    })
    .then(response => {
      if(response.status === 404){
        return setError(true);
      }
      return response.json()
    })
    .then(response => {
      setReleases(response);
    })
    .catch(console.error);
  }
  useEffect(() => {
    getReleaseApi()
  }, [count])
  
  if(error) {
    return (
      <div>
        <h1>
          No results
        </h1>
      </div>
    )
  }
 console.log(releases)
  return(
    <div className='discog-container' >
      <div className='discog-releases-container'>
        <h3 className='discog-releases'>
        Releases
        </h3>
      </div>
      <div className='thumbnail-container'>
        {releases ? releases.releases.map((music, index) => (
          <div key={index} className='music-thumb'>
            <div className='discog-thumb'>
              <img className='discog-thumb-img' src={music.thumb ? music.thumb : null} alt='source' />
              
            </div>
            <div className='discog-info'>
              <div className='discog-music-title' >{music.title}</div>
              <div className='discog-artist-name'>{music.artist}</div>
            </div>
        </div>
      )) : null}
      </div>
      <div className='discog-page-release' >
        {releases ? releases.pagination.page + ' out of ' + releases.pagination.pages : <p>loading</p>}
      </div>
      <div className='button-container'>
          <button className='discog-button prev' onClick={()=> setCount((prev) => prev > 1 ? prev - 1 : 1)}>Previous</button>
         <button className='discog-button next' onClick={()=> setCount((prev) => prev < 50 ? prev + 1 : 50)}>Next</button>
      </div>
    </div>
  )
}


export default Discography