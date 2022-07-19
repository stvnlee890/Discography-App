import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ArtistInfo() {
  const[artistInformation, setArtistInformation] = useState()
  let {artistId} = useParams()
useEffect(() => {
console.log(artistId)

const searchOptions = {
  key: process.env.REACT_APP_DISCOG_KEY,
  secret: process.env.REACT_APP_DISCOG_SECRET,
  keyPath: '&key=',
  secretPath: '&secret=',
}
const discogUrl = 'https://api.discogs.com/artists/'
const url = `${discogUrl}${artistId}`
console.log(url)

fetch(url)
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
       <p>Bio:
        {artistInformation ? artistInformation.profile : <p> loading</p>}
        </p>
    </div>


  )
}

export default ArtistInfo;

