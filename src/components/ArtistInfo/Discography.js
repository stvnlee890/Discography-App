import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Discography(){
  let {artistId} = useParams()
  const[releases, setReleases] = useState()
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
      }
    })
    .then(response => response.json())
    .then(response => {
      setReleases(response);
      //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
    })
    .catch(console.error);
    }, [])
    console.log(releases)

  return(
    <div>
      <h1>
      discography component
      </h1>
      {releases ? releases.releases.map((music) => (
        <div>
        <img src={music.thumb} alt='source' />
        <h5>{music.title}</h5>
        </div>
      )) :<p>loading</p>}
    </div>
  )
}

export default Discography