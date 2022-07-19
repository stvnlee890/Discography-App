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
const discogUrl = 'https://api.discogs.com/artist/'
const url = `${discogUrl}${artistId}{?sort,sort_order}`
console.log(url)

fetch(url)
.then(response => response.json())
.then(response => {
  setArtistInformation(response.results);
  //react renders after a fetch, and then sets the searchArtist state back to an empty string. 
  console.log(response)
})
.catch(console.error);

}, [])

 return(
    <div>
      <h1>Artist info</h1>
     
    </div>
  )
}

export default ArtistInfo;

