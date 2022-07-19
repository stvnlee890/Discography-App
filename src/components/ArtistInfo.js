import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ArtistInfo() {
  const[artistInformation, setArtistInformation] = useState()
  let {artistId} = useParams()
useEffect(() => {
console.log(artistId)

const discogUrl = 'https://api.discogs.com/artists/'
const url = `${discogUrl}${artistId}`
console.log(url)

fetch(url, {
  headers: {
    'Accept': 'application/vnd.discogs.v2.plaintext+json'
  }
})
.then(response => response.json())
.then(response => {
  setArtistInformation(response);
  //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
  console.log(response)
})
.catch(console.error);
}, [])


console.log(artistInformation)
return(
  <div>
      <h1>Artist info</h1>
        {/* <div dangerouslySetInnerHTML={{__html: artistInformation ? artistInformation.profile : <p> loading</p>}} /> */}
        {artistInformation ? artistInformation.profile_plaintext : <p> loading</p>}
      
     
    </div>


  )
}

export default ArtistInfo;

