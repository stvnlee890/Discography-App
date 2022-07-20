import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Discography(){
  
  let {artistId} = useParams()
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const discogUrl = 'https://api.discogs.com/artists/'

  const[releases, setReleases] = useState()
  const[error, setError] = useState(false)
  const[count, setCount] = useState(1)
  console.log(count)
  // const[page, setPage] = useState()
  // console.log(page)
  // const nextUrl = `https://api.discogs.com/artists/${artistId}/releases?page=2&per_page=10`
  // const prevUrl = `https://api.discogs.com/artists/${artistId}/releases?page=1&per_page=10`
  console.log(artistId)
 
  
  
  function getReleaseApi () {
    fetch(`${discogUrl}${artistId}/releases?page=${count}&per_page=5`, {
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
 
    console.log('component update')
  }

  console.log(releases)

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
    <div>
      <h1>
      discography component
      </h1>
      <div>
        {releases ? releases.releases.map((music, index) => (
          <div key={index} className='music-thumb'>
            <img src={music.thumb} alt='source' />
            <h5>{music.title}</h5>
            <h5>{music.artist}</h5>
        </div>
      )) :<p>loading</p>}
      </div>
      <div>
        {releases ? releases.pagination.page + ' out of ' + releases.pagination.pages : <p>loading</p>}
      </div>
      <button onClick={()=> setCount((prev) => prev > 1 ? prev - 1 : 1)}>Previous</button>
      <button onClick={()=> setCount((prev) => prev < releases.pagination.pages ? prev + 1 : releases.pagination.pages)}>Next</button>
    </div>
  )
}


export default Discography