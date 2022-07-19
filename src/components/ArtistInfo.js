import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtistProfile from "./ArtistInfo/ArtistProfile";

function ArtistInfo() {
  const[artistInformation, setArtistInformation] = useState()
  const token = process.env.REACT_APP_ACCESS_TOKEN;

  let {artistId} = useParams()
useEffect(() => {
console.log(artistId)

const discogUrl = 'https://api.discogs.com/artists/'
const url = `${discogUrl}${artistId}`
console.log(url)

fetch(url, {
  headers: {
    'Authorization': `Discogs token=${token}`,
    'Accept': 'application/vnd.discogs.v2.html+json'
  }
})
.then(response => response.json())
.then(response => {
  setArtistInformation(response);
  //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
})
.catch(console.error);
}, [])


console.log(artistInformation)
return(
  <div>
      <h1>Artist info</h1>
      
      {artistInformation ? <ArtistProfile artistInformation={artistInformation} /> : <p>loading</p> }

    </div>


  )
}

export default ArtistInfo;

