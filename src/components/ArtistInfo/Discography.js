import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Discography(){
  let {artistId} = useParams()
  const[releases, setReleases] = useState()
  const[error, setError] = useState(false)
  useEffect(() => {
    console.log(artistId)

    const token = process.env.REACT_APP_ACCESS_TOKEN;
    const discogUrl = 'https://api.discogs.com/artists/'
    const url = `${discogUrl}${artistId}/releases`
    console.log(url)
    
    fetch(url, {
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
      //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
      console.log(url)
    })
    .catch(console.error);
    }, [])
    // console.log(releases)
  if(error) {
    return (
      <div>
        <h1>
          No results found
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
        {releases ? releases.pagination.page : <p>loading</p>}
      </div>
    </div>
  )
}

export default Discography