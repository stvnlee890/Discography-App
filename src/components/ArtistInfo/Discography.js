// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Discography({ artistId }){
  
  // let {artistId} = useParams()
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const discogUrl = 'https://api.discogs.com/artists/'

  const[releases, setReleases] = useState()
  const[error, setError] = useState(false)
  const[count, setCount] = useState(1)

  // const[page, setPage] = useState()
  // console.log(page)
  // const nextUrl = `https://api.discogs.com/artists/${artistId}/releases?page=2&per_page=10`
  // const prevUrl = `https://api.discogs.com/artists/${artistId}/releases?page=1&per_page=10`
  console.log(artistId)
 
  
  
  function getReleaseApi () {
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
      // setPage(url)
      //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
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
              <img className='discog-thumb-img' src={music.thumb} alt='source' />
            </div>
            <div className='discog-info'>
              <div className='discog-music-title' >{music.title}</div>
              <div className='discog-artist-name'>{music.artist}</div>
            </div>
        </div>
      )) :<p>loading</p>}
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